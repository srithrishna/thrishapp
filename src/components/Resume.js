import React from 'react';
import image from './resume.png';

const MyComponent = () => {
  return (
    <div style={{textAlign:'center',justifyContent:'center'}}>
      <h1 class>Resume</h1>
      <img src= {image} alt="Resume" />
    </div>
  );
};

export default MyComponent;
