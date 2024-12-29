import { instance } from "./instonse.api"

export const userApi = {
    async getProfile(){
        const token = localStorage.getItem('token')
        if(token){
            const res = await instance.get('/users/profile',{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        return res.data
        }
        window.location = '/register'
        
    }
}