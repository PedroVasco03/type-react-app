import { login } from "./login"
import { api } from "../../API/api"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert=mockAlert
    const mockEmail='vasco@gmail.com'

    it('Deve Exibir alert boas vindas', ()=>{
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}`)
    })

    it('Não deve exibir a mensagem de boas vindas sem o email', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda')
    })

    it('deve exibir erro no caso de email invalido', async ()=>{
        login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email invalido')
    }
    )
})