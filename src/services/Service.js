import { generateUrlConfig } from "../helpers"

export default class Service {
    api_url = import.meta.env.VITE_NODE_ENV !== 'production' 
                        ? 'http://192.168.3.6:8888/api' 
                        : import.meta.env.VITE_API_URL

    constructor(model, createAdapter){
        this.model = model
        this.createAdapter = createAdapter
    }

    async all (config) {
        const url = generateUrlConfig(`${this.api_url}/${this.model}`, {
            limit: config?.limit ? config.limit : 10,
            page: config?.page ? config.page : 1,
            where: config?.where ? config.where : {}
        })
    
        const res = {
            data: [],
            meta: {}
        }
    
        try {
            const response = await fetch(url)
            const result = await response.json()
    
            if(result.status != 200){
                return res
            }
    
            result.data.forEach(row => {
                res.data.push(this.createAdapter(row))
            })
    
            res.meta = result.meta
        } catch (error) {
            console.log(error)
        }
    
        return res
    }

    async find (register) {
        const { id } = register
        const url = `${this.api_url}/${this.model}/${id}`

        const res = {
            data: {},
            meta: {}
        }

        try {
            const response = await fetch(url)
            const result = await response.json()

            if(result.status != 200){
                return res
            }

            res.data = this.createAdapter(result.data)
            res.meta = result.meta
        } catch (error) {
            console.log(error)
        }

        return res
    }

    
}