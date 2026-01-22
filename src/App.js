import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./HeaderAndFooter/Header";
import Footer from "./HeaderAndFooter/Footer";


import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
// import Med from "./components/Med";
// import Data from "./components/Data";
// import Training from "./components/Training";
// import Man from "./components/Man";
// import Hardware from "./components/Hardware";
// import Contact from "./components/Contact";
// import Web from "./components/Web";
// import Academic from "./components/Academic";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            {/* <Route path="/med" element={<Med/>}/>
            <Route path="/data" element={<Data/>}/>
            <Route path="/training" element={<Training/>}/>
            <Route path="/man" element={<Man/>}/>
            <Route path="/hardware" element={<Hardware/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/web" element={<Web/>}/>
            <Route path="/academic" element={<Academic/>}/> */}   

          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
