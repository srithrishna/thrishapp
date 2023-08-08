
import React from 'react';


const Biodata = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'centre', alignItems: 'Centre', flexWrap: 'wrap', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ flex: '0 0 48%', marginBottom: '20px' }}>
        <h2>Personal Information</h2>
        <p><b>Name:</b> Sri Thrishna</p>
        <p><b>DOB:</b> 23/02/2004</p>
        <p><b>Age: </b>19</p>
        <p><b>Eamil: </b>thrishna23jayakumar@gmail.com</p>
        <p><b>Phone number: </b>9344553386</p>
        <p><b>Address:</b> V G Rao Nagar, Udumalpet, Tiruppur
        <br /> 642 126</p>
      </div>
      <div style={{ flex: '0 0 48%', marginBottom: '20px', marginLeft:'30px' }}>
        <h2>Education</h2>
        <p><b>12th - Biology</b></p>
        <p>Srinivasa Vidhyalaya Matric Higher Secondary School</p>
        <p>Year: 2021</p>
        <p><b>10th</b></p>
        <p>Srinivasa Vidhyalaya Matric Higher Secondary School</p>
        <p>Year: 2019</p>
      </div>
      <div style={{ flex: '0 0 48%', marginBottom: '20px' }}>
        <h2>Work Experience @ School</h2>
        <p><b>ATAL Lab Memeber</b></p>
        <p><b>Duration:</b> 2020 - 2021</p>
        <p><b>projects: </b>Measuring Heart Beat Using Heart Beat Sensor</p>
        <p>our project journey exemplified a top-to-bottom approach, where we started with planning, <br />design, and architecture at the top and worked our way down through development, testing,<br /> and deployment. This comprehensive strategy allowed us to create a well-structured, <br />feature-rich, and reliable project that met all its intended objectives." </p>
      </div>
      <div style={{ flex: '0 0 48%', marginBottom: '20px', marginLeft:'30px' }}>
        <h2>Achievements @ School</h2>
        <p><b>Proficiency Rank Holder</b></p>
        <p>I Have been awarded Proficiency Rank holer for more than five time for being at top 3 ranks. </p>
        <p><b>Full Attendence Percentage Award</b></p>
        <p> Attendend my school classes without taking leave. This award was very challenging to recieve. I have been received it <b>two times</b>two in my school days. </p>
      </div>
      <div style={{ flex: '0 0 48%', marginBottom: '20px' }}>
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div style={{ flex: '0 0 48%', marginBottom: '20px', marginLeft:'30px' }}>
        <h2>Hobbies</h2>
        <ul>
          <li>Reading Books</li>
          <li>Formula One Racing Enthusiast</li>
        </ul>

      </div>
    </div>
  );
};

export default Biodata;

       