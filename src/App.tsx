import styled from 'styled-components'
import { Button, Center, ChakraProvider, Input, Box, Heading } from '@chakra-ui/react'
import { login } from './services/login/login';

const Box1 = styled.div `
  background-color:orange;
  border-radius:25px;
  padding-left:15px;
`

function App() {
  return (
    <ChakraProvider>
        <Box minHeight={'100vh'} backgroundColor={'#9413dc'} padding={'30px'}>
            <Box backgroundColor={'#ffffff'} padding={'20px'} borderRadius={'20px'}>
              <Center>
                <Heading as={'h1'} textTransform={'uppercase'} margin={'20px 0'}>Faça Login</Heading>
              </Center>
              <Center>
                <label htmlFor="email">Email</label>
                <Input margin={'10px'} placeholder="Email" type="email" id="email"/>
              </Center>
              
              <Center>
                <label htmlFor="password">senha</label>
                <Input margin={'10px'} placeholder="Email" type="password" id="password"/>
              </Center>
              <Center>
              <Button onClick={login} color={'#fff'} backgroundColor={'#9413dc'} fontWeight={'600'} margin={'20px 0'}>Entrar</Button>
              </Center>
            </Box>
          </Box>
    </ChakraProvider>
  );
}

export default App;
