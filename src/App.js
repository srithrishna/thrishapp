import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Biodata from './components/Biodata';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

const NavigationBox = ({ children }) => (
  <div style={{ border: '2px solid #ccc', padding: '20px', margin: '10px' }}>
    {children}
  </div>
);



const App = () => {
  const containerStyles = {
    backgroundColor: 'black',
    minHeight: '100vh',
    color: 'white',
  };
  const linkStyles = {
    color: 'white', // Change this color to your desired link color
    textDecoration: 'none', // Remove underline from the links
  };
  
  return (
    <Router >
      <div style={containerStyles}>
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>

            <li style={{ margin: '0 10px' }}>
              <NavigationBox>
                <Link to="/" style={linkStyles}>Home</Link>
              </NavigationBox>   
            </li>
            <li style={{ margin: '0 10px' }}>
              <NavigationBox>
                <Link to="/biodata" style={linkStyles}>Biodata</Link>
              </ NavigationBox>
            </li>
            <li style={{ margin: '0 10px' }}>
              <NavigationBox>
                <Link to="https://srithrishna.github.io/srithrishna-portfolio/#" style={linkStyles}>Portfolio</Link>
              </ NavigationBox>
            </li>
            <li style={{ margin: '0 10px' }}>
              <NavigationBox>
                <Link to="/resume" style={linkStyles}>Resume</Link>
              </ NavigationBox>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biodata" element={<Biodata />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
