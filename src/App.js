import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Category from './components/category/Category';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import P_state from './Contexts/paras/P_state';



function App() {
  return (
    <>
    <P_state>
        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/categories' element={<Category />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />



          </Routes>
        </BrowserRouter>
        </P_state>
    </>
  );
}

export default App;
