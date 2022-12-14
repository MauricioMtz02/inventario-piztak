import { Link } from "react-router-dom"
import { Button } from "../../components/styles/buttons"
import { CardTitle } from "../../components/styles/cards"
import { H1 } from "../../components/styles/text"
import { Layout } from "../../layouts"

export default function ProductosPage(){
  return (
    <>
      <div>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="mt-2 text-light dark:text-dark">
              <H1 color="light">Productos</H1>
              <p>Crea y actualiza los productos.</p>
            </div>

            <Link to='/productos/crear'>
              <Button color="light">
                Crear Producto
              </Button>
            </Link>
          </div>
        </CardTitle>
      </div>
    </>
  )
}

ProductosPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}