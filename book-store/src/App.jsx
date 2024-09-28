import './App.css'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signup from './components/Signup'

function App() {

  return (
   <div className='bg-slate-700 '>
     <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
