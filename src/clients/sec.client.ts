import axios from 'axios';

export const secClient = axios.create({
    baseURL: 'https://data.sec.gov',
    headers: {
        'User-Agent': 'EquityFundamentalsAPI adampoper@gmail.com'
    },
    timeout: 10000
});