import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Usloviy from './Usloviy';
import './App.css';

function App(){
return (
<Router>
<nav>
<Link to="/" className='link'>Главная</Link>
<Link to="/about" className='link'>О магазине</Link>
<Link to="/usloviy" className='link'>Условия доставки</Link>
<Link to="/conactUs" className='link'>Контакты</Link>
</nav>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/usloviy" element={<Usloviy/>}/>
<Route path="/conactUs" element={<ContactUs/>}/>
</Routes>
</Router>
);
}

export default App;

