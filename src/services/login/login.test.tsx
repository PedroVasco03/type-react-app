import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert=mockAlert
    it('Deve Exibir alert boas vindas', ()=>{
        login()
        expect(mockAlert).toBeCalled()
    })
})