import GenericEntity from "./generic-entity";

export const COMPANY_TABLE_NAME = 'company';

export interface Company extends GenericEntity {
    cmp_name: string;
    cmp_ticker: string;
    cmp_cik: string;
    cmp_is_active: boolean;
}

export const COMPANY_QUERIES = {
    SELECT_BY_ID: `SELECT * FROM ${COMPANY_TABLE_NAME} WHERE id = ?;`,
    SELECT_BY_TICKER: `SELECT * FROM ${COMPANY_TABLE_NAME} WHERE cmp_ticker = ?;`,
    SELECT_BY_CIK: `SELECT * FROM ${COMPANY_TABLE_NAME} WHERE cmp_cik = ?;`,
    SELECT_ALL: `SELECT * FROM ${COMPANY_TABLE_NAME};`,
}