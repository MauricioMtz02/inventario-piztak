import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuth } from '../hooks'
import { PrivateRoutes } from './'

const AppRouter = () => {
  const { status } = useAuth()

  const getLayout = (Page) => {
    return Page.getLayout ? Page.getLayout(<Page/>) : <Page/>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={status === 'auth' ? <PrivateRoutes getLayout={getLayout} /> : <>Public</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter