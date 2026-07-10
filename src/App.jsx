import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import AddPets from './components/AddPets'
import SearchPets from './components/SearchPets'
import DeletePets from './components/DeletePets'
import ViewPets from './components/ViewPets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPets/>}/>
        <Route path='/search' element={<SearchPets/>}/>
        <Route path='/delete' element={<DeletePets/>}/>
        <Route path='/view' element={<ViewPets/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
