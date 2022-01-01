import styled from "styled-components";
import Footer from "./components/Footer";
import React, { useEffect } from 'react';

import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import HowToInstallPage from './pages/HowToInstallPage';
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path='/how-to-install' element={<HowToInstallPage />} />
        <Route path='/contact-us' element={<ContactPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </Container>

  );
}

const Container = styled.div`
display: flex;
flex-direction: column;

`


export default App;
