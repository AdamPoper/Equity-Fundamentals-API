import { create } from "node:domain";
import { secClient } from "../clients/sec.client";
import { Company, COMPANY_QUERIES, COMPANY_TABLE_NAME } from "../entities/company";
import { SecCompany } from "../models/sec-company";
import { Persistence } from "../persistence/persistence";
import { createEntity } from "../entities/generic-entity";

export const syncCompanies = async () => {
    const res = await secClient.get(
        'https://www.sec.gov/files/company_tickers.json'
    );

    const secCompanies: SecCompany[] = Array.from(Object.values(res.data));
    // const secCompanyMap: Map<string, SecCompany> = new Map();
    // secCompanies.forEach(company => {
    //     secCompanyMap.set(company.cik_str, company);
    // });
    
    const companyEntities = await Persistence.selectEntitiesByNamedQuery<Company>(
        COMPANY_QUERIES.SELECT_ALL
    );

    // add new companies
    const newCompanies = new Array<Company>();
    for (const secCompany of secCompanies) {
        const existingCompany = companyEntities.find(company => company.cmp_cik === secCompany.cik_str);
        if (!existingCompany) {
            const newCompanyEntity = createEntity<Company>({
                cmp_name: secCompany.title,
                cmp_ticker: secCompany.ticker,
                cmp_cik: secCompany.cik_str,
                cmp_is_active: true
            });
            newCompanies.push(newCompanyEntity);
        }
    }

    await Persistence.persistEntities<Company>(COMPANY_TABLE_NAME, newCompanies);

    // update existing companies

    // mark companies that are no longer active as inactive
}