import { create } from 'apisauce'

export const config = {
    apiInstance: create(
        {
            baseURL: 'https://restcountries.eu/rest/v2/',
            timeout: 30000,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    }
