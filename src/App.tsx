import Card from "./components/Card/Card";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <h1>Hello Word</h1>
      <Card
        id={1}
        paragraph='Typescript'
        details='Typescript para front e back'
      />
      <Card
        id={2}
        paragraph='HTML'
        details='HTML para front e back'
      />
      <Card
        id={3}
        paragraph='SQL'
        details='SQL para BD'
      />
    </Layout>
  );
}

export default App;
