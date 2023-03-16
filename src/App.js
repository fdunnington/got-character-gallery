// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import Wrapper from './components/Wrapper';



function App() {
  return (
    <Router>
      <div>
        <Wrapper>
        <Navbar />
        <Container>
          <Routes>
            <Route path = "/Homepage" element={<Homepage/>} />
            <Route path = "/projects" element={<Projects/>} />
            <Route path = "/contact" element={<Contact/>} />
            <Route path = "/about" element={<About/>} />
          </Routes>
        </Container>
        <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
