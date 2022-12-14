import { useState } from "react"
import { CardTitle } from "../components/styles/cards"
import { H1 } from "../components/styles/text"
import { dateFormat } from "../helpers"
import { Layout } from "../layouts"

export default function PeriodoPage(){
  const [date, setDate] = useState(dateFormat().date)

  const handleChange = ({target: { value }}) => {
    if(!value){
      setDate(dateFormat().date)
      return
    }

    setDate(value)
  }

  return (
    <div>
      <CardTitle>
        <div className="flex justify-between items-center">
          <div className="mt-2 text-light dark:text-dark">
            <H1 color="light">Periodo</H1>
            <p>Consulta el reporte por periodo.</p>
          </div>

          <div>
            <input 
              type="date" 
              className="px-4 py-1 rounded-lg outline-none cursor-pointer bg-light hover:bg-gray-100 dark:bg-dark dark:hover:bg-gray-700 text-dark dark:text-light"
              value={date}
              onChange={handleChange}
            />
          </div>
        </div>
      </CardTitle>
    </div>
  )
}

PeriodoPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}