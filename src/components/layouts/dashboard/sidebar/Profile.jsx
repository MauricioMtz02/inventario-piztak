import { Link, useLocation } from "react-router-dom"
import { Avatar } from "../../../styles/avatars"

const name = 'Mauricio'

const Profile = () => {
  const { pathname } = useLocation()

  return (
    <Link to='/profile' className="flex items-center">
      <Avatar name={name} />
      <p className={`ml-2 text-gray-800 dark:text-gray-50 font-medium text-lg border-b-2 border-primary ${pathname !== '/profile' && 'border-opacity-0'} hover:border-opacity-100 transition-all`}>Hola {name}</p>
    </Link>
  )
}

export default Profile
