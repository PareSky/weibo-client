import fetch from './fetch'

export function Login(params){
    return fetch('login',{
        params,
        method: 'POST'
    })
}
export function AddWeibo(params){
    return fetch('wb/add',{
        params,
        method: 'POST'
    })
}