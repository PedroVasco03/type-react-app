import styled from 'styled-components'
import { Button, Center, ChakraProvider, Input, Box, Heading } from '@chakra-ui/react'
import { login } from './services/login/login';
import { Header } from './components/Header/Header';
import { ContainerHome } from './components/container/ContainerHome';

const Box1 = styled.div `
  background-color:orange;
  border-radius:25px;
  padding-left:15px;
`

function App() {
  return (
    <ChakraProvider>
        <Header/>
        <ContainerHome/>
    </ChakraProvider>
  );
}

export default App;
