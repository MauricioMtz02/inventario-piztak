import { useState, createContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { authService } from '../services'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // checking || auth || no-auth
    const [status, setStatus] = useState('checking')
    const [user, setUser] = useState({
        admin: 0
    })
    const [jwt, setJwt] = useState('')

    useEffect(() => {
        const validateJwt = async () => {
            const jwtCookie = Cookies.get('jwt')

            // Validar que exista jwt en localstorage
            if(!jwtCookie){
                // setStatus('no-auth')
                setStatus('auth') // developer
                return
            }

            // consultar api
            const res = await authService.profile(jwtCookie)

            // Validamos la consulta
            if(res.status != 200){
                handleLogout()
                return
            }

            setUser(res.data)
            setJwt(jwtCookie)
            setStatus('auth')
        }
        
        validateJwt()
    }, [])

    const handleAuth = (userAuth) => {
        console.log(userAuth)
        setUser(userAuth)
        setJwt(userAuth.jwt)

        Cookies.set('jwt', userAuth.jwt, { expires: 7 })
        setStatus('auth')
    }

    const handleLogout = () => {
        Cookies.remove('jwt')
        setStatus('no-auth')
    }

    return (
        <AuthContext.Provider 
            value={{
                user,
                jwt,
                status,
                handleAuth,
                handleLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext