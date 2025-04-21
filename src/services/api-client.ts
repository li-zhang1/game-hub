import axios, {CanceledError} from "axios"
export interface FetchResponse<T>{
    count: number;
    results: T[];
}
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '618b353b30014e2f845954585b5bab31'
    }
})

// class APIClient<T>{
//     endpoint: string;
//     constructor(endpoint: string) {
//         this.endpoint = endpoint;
//     }
//     getAll = () => {
//         return 
//     }

// }

export {CanceledError}