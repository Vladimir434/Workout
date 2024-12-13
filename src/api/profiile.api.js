import { instance } from "./instonse.api"

export const userApi = {
    async getProfile(){
        const token = localStorage.getItem('token')
        const res = await instance.get('/users/profile',{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        return res.data
    }
}