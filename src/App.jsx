
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Prodotti from "./pages/Prodotti"
import Info from "./pages/ChiSiamo"
import DefaultLayout from './assets/Layout/DefaultLayout'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/Chisiamo' element={<Info />} />
            <Route path='/Prodotti' element={<Prodotti />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
