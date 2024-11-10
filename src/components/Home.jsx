import React from 'react';
import '../Home.css';
import homeImage from '../images/deluxe1.jpg';
import matt2 from '../images/matt2.jpg';

const Home = () => (
  <div className="home">
    <h1>Welcome to Matt Food Bar & Deluxe Grills</h1>
    <p>Your destination for mouth-watering Tacos and Grilled Wings.</p>
   
    <div class="row">
    <div class="column">
    <img src={homeImage} alt="Matt Food Bar Logo" width="443" height="400" /> 
    </div>
    <div class="column">
    <img src={matt2} alt="Deluxe Grills logo" width="355" height="300" />
    
    </div>
    </div>
      
  </div>
);

export default Home;
