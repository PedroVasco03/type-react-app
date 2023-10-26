import { Layout } from "./components/Layout/Layout";
import styled from 'styled-components'

const Box = styled.div `
  background-color:orange;
  border-radius:25px;
  padding-left:15px;
`

function App() {
  return (
    <Layout>
      <Box>
        <h1>Faça Login</h1>
      </Box>
      
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />

      <label htmlFor="password">senha</label>
      <input type="password" name="password" id="password"></input>

      <button>Entrar</button>
    </Layout>
  );
}

export default App;
