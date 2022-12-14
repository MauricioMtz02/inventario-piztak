import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to='/' className="text-dark dark:text-light">
      <h2 className="text-2xl font-bold">Inventario</h2>
      <p className="text-sm opacity-50">Control y Administración</p>      
    </Link>
  )
}

export default Logo
