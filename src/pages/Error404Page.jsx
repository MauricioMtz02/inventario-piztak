import { Link } from "react-router-dom"
import { Button } from "../components/styles/buttons"

const Error404Page = () => {
  return (
    <div className="min-h-screen w-full bg-primary flex justify-center items-center">
      <div className="text-center">
        <div className="mb-3 text-light dark:text-dark">
          <h1 className="text-5xl font-bold">Error 404</h1>
          <p>Página no encontrada</p>
        </div>
        <Link to={'/'}>
          <Button color="dark">Volver</Button>  
        </Link>      
      </div>
    </div>
  )
}

export default Error404Page
