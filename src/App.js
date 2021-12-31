import styled from "styled-components";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import HowToInstallPage from './pages/HowToInstallPage';
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path='/how-to-install' element={<HowToInstallPage />} />
        <Route path='/contact-us' element={<ContactPage />} />
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
