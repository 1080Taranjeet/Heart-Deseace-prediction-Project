
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home';
import ContactUS from './ContactUs';
import AboutUs from './AboutUS';
import Signin from './Signin';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/ContactUs' element={<ContactUS/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Signin' element={<Signin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
