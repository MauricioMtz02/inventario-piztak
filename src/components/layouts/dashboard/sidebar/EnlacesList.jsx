import { AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineCodeSandbox, AiOutlineTeam } from 'react-icons/ai'
import { MdOutlineMonetizationOn, MdOutlineInventory2 } from 'react-icons/md'
import { CiGrid41 } from 'react-icons/ci'

export const enlacesList = [
  {
    name: 'Periodo',
    href: '/periodo',
    icon: <AiOutlineDashboard/>
  },
  {
    name: 'Diferidos',
    href: '/diferidos',
    icon: <MdOutlineMonetizationOn/>
  },
  {
    name: 'Inventario',
    href: '/inventario',
    icon: <MdOutlineInventory2/>
  },
  {
    name: 'Lista de Compras',
    href: '/lista-de-compras',
    icon: <AiOutlineShoppingCart/>
  }
]

export const catalogoList = [
  {
    name: 'Categorías',
    href: '/categorias',
    icon: <CiGrid41/>
  },
  {
    name: 'Productos',
    href: '/productos',
    icon: <AiOutlineCodeSandbox/>
  },
  {
    name: 'Usuarios',
    href: '/usuarios',
    icon: <AiOutlineTeam/>
  }
]