import React from 'react';
import '../Menu.css';
import { Link } from 'react-router-dom';
import wings from '../images/wings.jpg';
import wing1 from '../images/wing1.jpg';
import wing2 from '../images/wing2.jpg';
import wing3 from '../images/wing3.jpg';
import chips from '../images/chips.jpg';
import chips1 from '../images/chips1.jpg';
import beefB from '../images/beefB.jpg';
import groundB from '../images/groundB.jpg';
import baconB from '../images/baconB.jpg';
import ribB from '../images/ribB.jpg';

const SideDish = () => {
  const dishes = [
    { name: 'Grilled wings', price: 'R30', img: wings, explanation: 'Juicy grilled wings with a smoky flavor.'  },
    { name: ' Baked Wings ', price: 'R35', img: wing1,explanation: 'Healthy baked wings with a crispy skin.'  },
    { name: ' Cooked Wings  ', price: 'R40', img: wing2,explanation: 'Slow-cooked wings, tender and delicious.' },
    { name: ' Crispy wings  ', price: 'R45', img: wing3,explanation: 'Extra crispy wings with a crunchy bite.' },
    { name: '  Crispy Chips  ', price: 'R55', img: chips ,explanation: 'Golden, crispy chips, perfect as a snack.' },
  ];
  const dishess = [
    { name: ' Spicy Chips ', price: 'R35', img: chips1, explanation: 'Crispy and seasoned with a special spicy blend.'  },
    { name: 'Beef Burger', price: 'R45', img: beefB, explanation: 'Classic beef burger with lettuce, tomato, and cheese.' },
    { name: '  Ground Burger ', price: 'R50', img: groundB, explanation: 'Ground beef burger with a smoky flavor and grilled to perfection.'},
    { name: ' Bacon Burger', price: 'R49', img: baconB,explanation: 'Juicy burger topped with crispy bacon and melted cheese.' },
    { name: '  Short Rib Burger   ', price: 'R60', img: ribB ,explanation: 'Tender short rib burger with a tangy BBQ sauce.'},
  ];




    return (
        <div className="menu">
        <h2>Side Dish</h2>
       
        <div style={{ marginTop: '20px' }}>
          <Link to="/menu" className="menu-link">
            <button>See Main Dishes</button>
          </Link>
        </div>
        <br />
        <div className="menu-items">
          {dishes.map((dish, index) => (
            <div key={index} className="menu-item">
              <img src={dish.img} alt={dish.name} />
              <h3>{dish.name}</h3>
              <p className="explanation">{dish.explanation}</p>
              <p>{dish.price}</p>
              
            </div>
          ))}
        </div>
        <br/>
        <div className="menu-items">
          {dishess.map((dish, index) => (
            <div key={index} className="menu-item">
              <img src={dish.img} alt={dish.name} />
              <h3>{dish.name}</h3>
              <p className="explanation">{dish.explanation}</p>
              <p>{dish.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default SideDish;