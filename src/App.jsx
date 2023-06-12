import './App.scss'
import { Route, Routes } from "react-router-dom"
import { Header } from './containers/index.js'
import { Contacs, Homepage, About, Career } from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Contacts' element={<Contacs />} />
        <Route path='/About' element={<About />} />
        <Route path='/Career' element={<Career />} />
      </Routes>
    </>
  )
}

export default App
