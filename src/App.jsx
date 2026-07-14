import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddVol from './components/AddVol'
import ViewVol from './components/viewVol'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddVol />
      <ViewVol/>
    </>
  )
}

export default App
