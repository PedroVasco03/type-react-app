// import styled from 'styled-components'
import { ChakraProvider } from '@chakra-ui/react'
import { ContainerHome } from './components/container/ContainerHome';
import { Login } from './components/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Conta } from './pages/conta/Conta';
import { ContaInfo } from './pages/conta/ContaInfo.';

// const Box1 = styled.div `
//   background-color:orange;
//   border-radius:25px;
//   padding-left:15px;
// `

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
      <BrowserRouter>
        <ChakraProvider>
          <Layout>
            <Routes>
                <Route path='/' element={
                  <ContainerHome/>
                }/>
                <Route path='/conta/:id' element={
                  <Conta/>
                }/>
                <Route path='/Infoconta' element={
                  <ContaInfo/>
                }/>
                <Route path='/login' element={
                  <Login/>
                }/>
            </Routes> 
          </Layout>
        </ChakraProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
