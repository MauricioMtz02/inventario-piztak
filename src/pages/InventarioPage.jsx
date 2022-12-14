import { H1 } from "../components/styles/text";
import { Layout } from "../layouts";

export default function InventarioPage(){
  return (
    <div>
      <H1>InventarioPage</H1>
    </div>
  )
}

InventarioPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}