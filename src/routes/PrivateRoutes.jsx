import { Route, Routes } from "react-router-dom"
import { CategoriasPage, DiferidosPage, Error404Page, HomePage, InventarioPage, ListaDeComprasPage, PeriodoPage, ProductosPage, ProfilePage, SearchPage } from "../pages"

const PrivateRoutes = ({getLayout}) => {
  return (
    <Routes>
      <Route path="/" element={getLayout(HomePage)} />
      <Route path="/profile" element={getLayout(ProfilePage)} />
      <Route path="/periodo" element={getLayout(PeriodoPage)} />
      <Route path="/diferidos" element={getLayout(DiferidosPage)} />
      <Route path="/inventario" element={getLayout(InventarioPage)} />
      <Route path="/categorias" element={getLayout(CategoriasPage)} />
      <Route path="/productos" element={getLayout(ProductosPage)} />
      <Route path="/lista-de-compras" element={getLayout(ListaDeComprasPage)} />
      <Route path="/search">
        <Route path=":name" element={getLayout(SearchPage)} />
      </Route>
      <Route path="*" element={getLayout(Error404Page)} />
    </Routes>
  )
}

export default PrivateRoutes