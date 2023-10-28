import { useState, useEffect } from 'react';
import { login } from '../../services/login/login';
import { Box, Center, Input,  Heading } from "@chakra-ui/react"
import { DButton } from '../DButton/DButton';
import { api } from '../../API/api';

interface IUserData{
  email:string
  password:string
  name:string
}

export const Login = () =>{
  const [email, setEmail]= useState<string>('')
  const [userData,setUserData] = useState < null | IUserData>()

  useEffect(()=> {
    const getData = async () =>{
      const data: any | IUserData = await api
      setUserData(data)
    }

    getData()
  }, [])
  console.log('email digitado', email)
  const logar = ()=>{
    alert(email)
  }
    return(
                 <Box minHeight={'100vh'} backgroundColor={'#9413dc'} padding={'30px'}>
                 <Box backgroundColor={'#ffffff'} marginTop='60px'  padding={'20px'} borderRadius={'20px'}>
                   {/* {userData === null || userData === undefined ? <h1>Loading...</h1>:
                   <h1>Informações carregadas</h1>} */}
                   <Center>
                     <Heading as={'h1'} textTransform={'uppercase'} margin={'20px 0'}>Faça Login</Heading>
                   </Center><small>
                     {userData?.name}</small>
                   <Center>
                     <label htmlFor="email">Email</label>
                     <Input margin={'10px'} placeholder="Email" value={email} onChange={(event)=>{ setEmail(event.target.value)
                       console.log(event)
                       }} type="email" id="email"/>
                   </Center>
                   
                   <Center>
                     <label htmlFor="password">senha</label>
                     <Input margin={'10px'} placeholder="Email" type="password" id="password"/>
                   </Center>
                   <Center>
                     <DButton onClick={() => (login(email))}/>
                   </Center>
                 </Box>
               </Box>
    )
}