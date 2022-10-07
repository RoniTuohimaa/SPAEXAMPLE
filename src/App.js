import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import React from 'react';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <>
    <Navbar />
    <Header />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
    </>
    
    
  );
}

export default App;
