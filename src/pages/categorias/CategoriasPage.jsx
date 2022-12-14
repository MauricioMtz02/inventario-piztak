import { Link } from "react-router-dom"
import { Button } from "../../components/styles/buttons"
import { CardTitle } from "../../components/styles/cards"
import { H1 } from "../../components/styles/text"
import { Layout } from "../../layouts"

export default function CategoriasPage(){
  return (
    <>
      <div>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="mt-2 text-light dark:text-dark">
              <H1 color="light">Categorías</H1>
              <p>Crea y actualiza las categorías.</p>
            </div>

            <Link to='/'>
              <Button color="light">
                Crear Categoría
              </Button>
            </Link>
          </div>
        </CardTitle>
      </div>
    </>
  )
}

CategoriasPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}