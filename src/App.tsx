import styled from 'styled-components'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { ContainerHome } from './components/container/ContainerHome';
import { useState } from 'react';
import { Login } from './components/login/login';

const Box1 = styled.div `
  background-color:orange;
  border-radius:25px;
  padding-left:15px;
`

function App() {
  // const [value, setValue] =useState(0)
  // const [outroValor, setOutroValor] = useState(1)
  // return (
  //   <>
  //   <button onClick={()=>{setValue(value + 1)}}>Add</button>
  //   <h1>{value}</h1>

  //   <button onClick={()=>{setOutroValor(outroValor + 1)}}>Add</button>
  //   <h1>{outroValor}</h1>
  //   </>
  // );

  return(
    <>
    <Login/>
    </>
  )
}

export default App;
