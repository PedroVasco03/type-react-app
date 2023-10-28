import { api } from "../../API/api"

export const login = async (email: string):Promise<void> => {
    const data:any = await api
    
    if(email !== data.email){
        return alert('Email Inválido')
    }

    alert(`Bem vindo ${email}`)
}