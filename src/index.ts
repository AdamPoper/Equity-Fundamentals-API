import { Company, COMPANY_TABLE_NAME } from "./entities/company";
import { createEntity } from "./entities/generic-entity";
import { syncCompanies } from "./jobs/sync-companies.job";
import { Persistence } from "./persistence/persistence";

(async () => {
    // const newCompany = createEntity<Company>({
    //     cmp_name: 'MICROSOFT CORP',
    //     cmp_ticker: 'MSFT',
    //     cmp_cik: '789019',
    //     cmp_is_active: true
    // });
    // await Persistence.persistEntity<Company>(COMPANY_TABLE_NAME, newCompany);
    await syncCompanies();
})();