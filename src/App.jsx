import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddVol from './components/AddVol'
import ViewVol from './components/viewVol'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddVol/>}/>
      <Route path='/add' element={<AddVol/>}/>
         <Route path='/view' element={<ViewVol/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
