import { H1 } from "../components/styles/text";
import { Layout } from "../layouts";

export default function ListaDeComprasPage(){
  return (
    <div>
      <H1>ListaDeComprasPage</H1>
    </div>
  )
}

ListaDeComprasPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}