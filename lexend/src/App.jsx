import Header from './componets/Header'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './componets/Contact';
import MoreContact from './componets/MoreContact';
import Questions from './componets/Questions';
import Brands from './componets/Brands';
import Articles from './componets/Articles';
import Footer from './componets/Footer';

function App() {

  return (
    <>
      <Header/>
      <Contact/>
      <MoreContact/>
      <Questions/>
      <Brands/>
      <Articles/>
      <Footer/>
    </>
  )
}

export default App
