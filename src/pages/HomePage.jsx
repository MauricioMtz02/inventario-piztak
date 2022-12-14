import { Link } from "react-router-dom";
import { Button } from "../components/styles/buttons";
import { CardTitle } from "../components/styles/cards";
import { H1 } from "../components/styles/text";
import { Layout } from "../layouts";

export default function HomePage(){
  return (
    <>
      <div>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="mt-2 text-light dark:text-dark">
              <H1 color="light">¡Buenas Noches! :)</H1>
              <p>Bienvenid@ al Sistema de Inventario.</p>
            </div>

            <Link to='/periodo'>
              <Button color="light">
                Ver Periodo
              </Button>
            </Link>
          </div>
        </CardTitle>
      </div>
    </>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}