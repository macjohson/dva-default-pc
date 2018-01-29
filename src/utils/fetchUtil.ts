import request from './request';
import queryString from 'query-string';

export interface Api {
    api: {
        api: string,
        method: string,
        isBody: boolean
    },
    payload:any
}

const fetchUtil = ({api:{api,method = "GET",isBody = false},payload}: Api) => {
    if(!isBody){
        return request(api + "?" + queryString.stringify(payload),{method})
    }else{
        return request(api,{
            method,
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        })
    }
}

export default fetchUtil;