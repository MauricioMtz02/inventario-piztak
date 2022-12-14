import { Link, useLocation } from "react-router-dom"

const Enlaces = ({enlaces = []}) => {
  return (
    <div className="grid gap-3">
      {enlaces.map(enlace => <Enlace key={enlace.href} enlace={enlace} />)}
    </div>
  )
}

const Enlace = ({enlace: { name, href, icon }}) => {
  const { pathname } = useLocation()

  const isLocation = () => {
    return pathname === href
  }

  return (
    <Link
      to={href}
      className={`py-2 px-4 border-l-4 ${isLocation() ? 'border-primary' : 'border-gray-200'} hover:bg-light dark:hover:bg-dark text-dark dark:text-light`}
    >
      <span className="flex items-center">
        <span className={`mr-2 text-2xl ${isLocation() && 'text-primary'}`}>{icon}</span>
        <span>{name}</span>
      </span>
    </Link>
  )
}

export default Enlaces
