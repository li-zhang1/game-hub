import axios, {AxiosRequestConfig, CanceledError} from "axios"
import { GameQuery } from "../App";
export interface FetchResponse<T>{
    count: number;
    results: T[];
}
const axioInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '618b353b30014e2f845954585b5bab31'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axioInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data.results)
    }


}


export {CanceledError}
export default APIClient;