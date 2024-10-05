

import React from "react";
// import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import BookingApp from "./components/BookingApp";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ContactForm from "./components/ContactForm";
import AboutUs from "./components/AboutUs";

function App() {
  

  return (
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/loginpage' element={<LoginPage/>} />
      <Route path='/signuppage' element={<SignupPage/>} />
      <Route path='/slider' element={<Slider/>} />
      <Route path='/contactform' element={<ContactForm/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
    </Routes>
    <br></br>
    <Footer/>
  </Router>
  );
}

export default App;
