import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '618b353b30014e2f845954585b5bab31'
    }
})