import Card from "./components/Card/Card";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <h1>Faça Login</h1>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />

      <label htmlFor="password">senha</label>
      <input type="password" name="password" id="password"></input>

      <button>Entrar</button>
    </Layout>
  );
}

export default App;
