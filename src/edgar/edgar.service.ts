import { secClient } from "../clients/sec.client";

export async function getAllCompanyTickersNamesAndCIKs(): Promise<string[]> {
    try {
        const response = await secClient.get('/files/company_tickers.json');
        const data = response.data;
        const tickers = data.map((entry: any) => entry.ticker);
        return tickers;
    } catch (error) {
        console.error('Error fetching company tickers:', error);
        throw error;
    }
}