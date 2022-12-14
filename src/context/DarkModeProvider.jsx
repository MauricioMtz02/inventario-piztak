import { useState, createContext, useEffect } from 'react'
import Cookies from 'js-cookie'

const DarkModeContext = createContext()

const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
      const validateDarkMode = () => {
        const darkModeCookie = Cookies.get('darkMode')

        if(!Number(darkModeCookie)){
          return
        }

        setDarkMode(darkModeCookie)
      }

      validateDarkMode()
    }, [])

    useEffect(() => {
      const html = document.querySelector('html')
      Number(darkMode) ? html.classList.add('dark') : html.classList.remove('dark')
    }, [darkMode])

    const handleDarkMode = () => {
      setDarkMode(!darkMode)
      Cookies.set('darkMode', !darkMode ? '1' : '0', { expires: 30 })
    }

    return (
        <DarkModeContext.Provider 
            value={{
              darkMode,
              handleDarkMode    
            }}
        >
            {children}
        </DarkModeContext.Provider>
    )
}

export {
    DarkModeProvider
}

export default DarkModeContext