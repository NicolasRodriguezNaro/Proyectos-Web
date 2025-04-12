import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'

import HomePage from './Pages/HomePage/HomePage'
import FilterPage from './Pages/FilterPage/FilterPage'
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'

const App = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/filter/:especie' element={<FilterPage />} />
          <Route path='/details/:id' element={<DetailsPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

      <HomePage />

      <Footer />
    </>
  )
}

export default App