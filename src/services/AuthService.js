import { createUserAdapter } from "../adapters"
import { Service } from "./"

class Auth extends Service{
    async auth(auth){
        const { identifier, password } = auth
        const url = `${this.api_url}/${this.model}`

        const res = {
            status: null,
            msg: '',
            data: {},
            meta: {}
        }

        try {
            const data = new FormData()
            data.append('identifier', identifier)
            data.append('password', password)

            const response = await fetch(url, {
                method: 'POST',
                body: data
            })
            const result = await response.json()
    
            res.msg = result.msg
            res.status = result.status
            res.data = this.createAdapter(result.data)
            res.meta = result.meta
        } catch (error) {
            console.log(error)
        }
    
        return res
    }

    async profile(jwt){
        const url = `${this.api_url}/${this.model}/profile`

        const res = {
            status: null,
            msg: '',
            data: {},
            meta: {}
        }

        try {
            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`
                }
            })
            const result = await response.json()
    
            res.msg = result.msg
            res.status = result.status
            res.data = this.createAdapter(result.data)
            res.meta = result.meta
        } catch (error) {
            console.log(error)
        }
    
        return res
    }
}

const authService = new Auth('auth', createUserAdapter)

export default authService