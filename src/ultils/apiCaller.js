
import axios from 'axios'
import  authHeader  from "../service/auth-header";

const API_URL = 'https://conduit.productionready.io/api'
const token = localStorage.getItem('jwt')

const callAPI = (endpoint, method, body,params) => {
    return axios({
        method : method,
        url: API_URL +'/' + endpoint,
        data: body,
        params:{
            params
        },
        headers:{
            'Authorization': "Token " + token
        }
    })
}

export default callAPI