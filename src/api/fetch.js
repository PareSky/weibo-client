import axios from 'axios'

const Host = 'http://localhost:4000'

export default async function fetch(url, {params, method='GET',...restConfig}={}){
    return axios({
        baseURL: Host,
        url,
        data: params,
        method,
        ...restConfig,
        withCredentials: true
    })
}