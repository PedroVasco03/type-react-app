import { useState } from 'react';
import { login } from '../../services/login/login';
import { Box, Center, Input,  Heading } from "@chakra-ui/react"
import { DButton } from '../DButton/DButton';



export const Login = () =>{
  const [email, setEmail]= useState<string>('')
    return(
                 <Box minHeight={'100vh'} backgroundColor={'#9413dc'} padding={'30px'}>
                 <Box backgroundColor={'#ffffff'} marginTop='60px'  padding={'20px'} borderRadius={'20px'}>
                   {/* {userData === null || userData === undefined ? <h1>Loading...</h1>:
                   <h1>Informações carregadas</h1>} */}
                   <Center>
                     <Heading as={'h1'} textTransform={'uppercase'} margin={'20px 0'}>Faça Login</Heading>
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