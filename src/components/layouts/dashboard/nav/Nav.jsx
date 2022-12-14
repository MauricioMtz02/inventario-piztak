import { Container } from "../../../styles/layout"
import { Logo, Search, DarkMode } from './'
import { AiOutlineUser } from 'react-icons/ai'
import { ButtonIcon } from "../../../styles/buttons"
import Hamburger from 'hamburger-react'
import { useDarkMode } from "../../../../hooks"

const Nav = ({open, setOpen}) => {
  const { darkMode } = useDarkMode()

  return (
    <nav className="py-5">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className={`mr-2 ${open ? 'fixed z-[11]' : ''} lg:hidden`}>
              <Hamburger color={`${darkMode ? '#f9fafb' : '#1f2937'}`} toggled={open} toggle={setOpen} />
            </div>
            <Logo/>

            <div className="hidden lg:block">
              <Search/>
            </div>
          </div>

          <div>
            <DarkMode/>
            
            <ButtonIcon
              Icon={AiOutlineUser}
              title='Perfil'
            />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Nav