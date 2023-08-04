import logo from './logo.svg';
import './App.css';
import './index.js';
import pic from './experience.jpeg' ;
import React, { useState } from 'react';




function App() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonKey) => {
    setActiveButton(buttonKey === activeButton ? null : buttonKey);
  };

  const contentMapping = {
    p1: "This is JK family's page",
    p2: "This is Thrishna's page",
    p3: "This is Sanjay's page",
    p4: "This is Jayakumar's page",
    p5: "This is Kavitha's page",
  };

  return (
    <div className="App">
      <h1>Welcome all</h1>
      <button type="button" onClick={() => handleButtonClick('p1')}>p1</button>
        {activeButton === 'p1' && (
          <div>
            <h1>{contentMapping.p1}</h1>
          </div>
        )}
        <button type="button" onClick={() => handleButtonClick('p2')}>p2</button>
        {activeButton === 'p2' && (
          <div>
            <h1>{contentMapping.p2}</h1>
          </div>
        )}
        <button type="button" onClick={() => handleButtonClick('p3')}>p3</button>
        {activeButton === 'p3' && (
          <div>
            <h1>{contentMapping.p3}</h1>
          </div>
        )}

        <button type="button" onClick={() => handleButtonClick('p4')}>p4</button>
        {activeButton === 'p4' && (
          <div>
            <h1>{contentMapping.p4}</h1>
          </div>
        )}

        <button type="button" onClick={() => handleButtonClick('p5')}>p5</button>
        {activeButton === 'p5' && (
          <div>
            <h1>{contentMapping.p5}</h1>
          </div>
        )}
        <header className="App-header">
          <h1>Hello</h1>
          <p>Thrishna Jayakumar</p>
        <p><em>THIS IS SRI THRISHNA</em></p>
        <div>
          <img src={pic} />
        </div>
        <h2>EDUCATION</h2>
          
        <p>completed my schooling at<b><u>SRINIVASA VIDHYALAYA MATRIC HR SEC SCHOOL UDUMALPET</u></b></p>
        <p> currently pursuing my UG degree in B Tech <b><u>ARTIFICAL INTELLIGENCE AND DATA SCIENCE</u></b></p>
        <h2>MARKS</h2>
        <ol type="1" start="1">
            <li>10th - 96%</li>
            <li>12th - 95%</li>
        </ol>
        <h2>PROGRAMMING LANGUAGES</h2>
        <ol type="A" start="1" >
            <li>python</li>
            <li>html</li>
            <li>css</li>
          </ol>
        <h2>DOMAINS</h2>
        <ol type="a" start="1">
            <li>AI</li>
            <li>ML</li>
            <li>data science</li>
            <li>
                app development
            </li>   
        </ol>
        <div class="grid-container">
            <div class="grid-item">Jayakumar</div>
            <div class="grid-item">Kavitha</div>
            <div class="grid-item">Sri Thrishna</div>
            <div class="grid-item">Sri Sanjay Raghav</div>
                  
        </div>
                
        <div class="container">
            <div class="be">Sri Thrishna</div>
            <div class="be">Karishma</div>
            <div class="be">Kamali</div>
            <div class="be">Amitha</div>
            <div class="be">Bhavya</div>
            <div class="be">Nivethita</div>
            <div class="be">Evan</div>
            <div class="be">Kavinaya</div>
        </div>
      </header>
    </div>
  );
}
export default App;


