import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Explorar from './pages/Explorar'
import Criados from './pages/Criados'
import Layout from './pages/Layout'

function App() {
  return (
    <>
      <Routes>
      <Route element={<Layout />}>  
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explorar />}/>
        <Route path="/criados" element={<Criados />}/>
      </Route>
      </Routes>
    </>
  )
}

export default App