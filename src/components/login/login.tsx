import { useState } from 'react';
import { login } from '../../services/login/login';
import { Box, Center, Input, Button, Heading } from "@chakra-ui/react"
import { DButton } from '../DButton/DButton';

export const Login = () =>{
  const [email, setEmail]= useState('')
  console.log('email digitado', email)
  const logar = ()=>{
    alert(email)
  }
    return(
        <Box minHeight={'100vh'} backgroundColor={'#9413dc'} padding={'30px'}>
            <Box backgroundColor={'#ffffff'} padding={'20px'} borderRadius={'20px'}>
              <Center>
                <Heading as={'h1'} textTransform={'uppercase'} margin={'20px 0'}>Faça Login</Heading>
              </Center>
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