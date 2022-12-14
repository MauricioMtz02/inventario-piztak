import { useParams } from "react-router-dom";
import { H1 } from "../components/styles/text"
import { Layout } from "../layouts"

export default function SearchPage(){
  const { name } = useParams()

  return (
    <>
      <div>
        <H1>SearchPage</H1>
        <p>Buscando por: {name}</p>
      </div>
    </>
  )
}

SearchPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}