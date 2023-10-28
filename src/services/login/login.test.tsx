import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert=mockAlert
    const mockEmail='vasco@gmail.com'
    
    it('Deve Exibir alert boas vindas', ()=>{
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}`)
    })

    it('Não deve exibir a mensagem de boas vindas sem o email', () => {
        login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda')
    })
})