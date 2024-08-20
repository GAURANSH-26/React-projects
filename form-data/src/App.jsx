import Form from './components/Form';
import Data from './components/Data';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/data' element={<Data/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
