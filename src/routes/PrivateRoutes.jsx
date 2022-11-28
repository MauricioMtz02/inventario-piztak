import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages"

const PrivateRoutes = ({getLayout}) => {
  return (
    <Routes>
      <Route path="/" element={getLayout(HomePage)} />
    </Routes>
  )
}

export default PrivateRoutes