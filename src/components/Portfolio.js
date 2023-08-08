import React from 'react';

const Portfolio = () => {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust the height as needed
    border: '1px solid #ccc',
    padding: '20px',
    margin: '10px' // Border styling
  };

  const linkStyles = {
    fontWeight: 'bold',
    textDecoration: 'none', // Remove underline from the link
  };

  return (
    <div style={containerStyles}>
      <a href='https://srithrishna.github.io/srithrishna-portfolio/#' style={linkStyles}>
        Link to Portfolio
      </a>
    </div>
  );
};

export default Portfolio;
