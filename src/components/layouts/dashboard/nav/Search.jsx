import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../../styles/buttons"

const Search = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    // Validar que no este vacio
    if(name.length < 4) return

    navigate(`/search/${name}`)
  }

  return (
    <form className="ml-8 flex" onSubmit={handleSubmit}>
      <input 
        type="text"
        className="px-5 py-1 shadow rounded-l-xl outline-none text-gray-600 dark:text-light bg-light dark:bg-dark w-72"
        placeholder="Buscar Producto"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <Button
        className='rounded-none rounded-r-xl'
      >
        Buscar
      </Button>
    </form>
  )
}

export default Search
