import { H1 } from "../components/styles/text";
import { Layout } from "../layouts";

export default function DiferidosPage(){
  return (
    <div>
      <H1>DiferidosPage</H1>
    </div>
  )
}

DiferidosPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}