import { useEffect, useState } from "react"
import { Nav, Sidebar } from "../components/layouts/dashboard"
import { Container } from "../components/styles/layout"

const Layout = ({children}) => {
  const [hScreen, setHScreen] = useState(window.screen.availHeight - 103)
  const [hContent, setHContent] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const listenResize = () => {
      window.addEventListener('resize', () => {
        setHScreen(window.screen.availHeight - 103)
      })
    }

    listenResize()
  }, [])

  useEffect(() => {
    setHContent(hScreen - document.querySelector('#header').offsetHeight)
  }, [hScreen])

  return (
    <div className="bg-white dark:bg-gray-900 relative">
      <div className="relative z-[1]">
        <header className="pb-5" id="header">
          <Nav
            open={open}
            setOpen={setOpen}
          />
        </header>

        {/* Content */}
        <Container>
          <div className="grid lg:grid-cols-8 h-full">
            <aside className="col-span-2">
              <Sidebar
                open={open}
              />
            </aside>

            <div className={`col-span-6 flex flex-col justify-between max-lg:h-[83vh]`} style={{minHeight: `${hContent}px`}}>
              <main>
                {children}
              </main>

              <footer className="py-3 border-t border-gray-200 dark:border-gray-400 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">Todos los derechos reservados</p>
              </footer>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Layout