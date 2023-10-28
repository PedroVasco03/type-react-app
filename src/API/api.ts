const conta = {
   email: 'vasco@gmail.com',
   password:'123456',
   name: 'Pedro Vasco'
}

export const api = new Promise((resolve) =>{
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})