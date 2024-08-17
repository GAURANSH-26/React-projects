import Form from './components/Form';
import {BrouserRouter,Routes,Route} from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrouserRouter>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/data' element={<Data/>}/>
    </Routes>
    </BrouserRouter>
  )
}

export default App
