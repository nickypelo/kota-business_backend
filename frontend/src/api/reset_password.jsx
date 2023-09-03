import axios from "axios";


export default axios.create({
    baseURL: 'http://localhost:8000/api/rest-auth/password/reset'
})
