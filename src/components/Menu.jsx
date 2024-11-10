import React from 'react';
import '../Menu.css';
import { Link } from 'react-router-dom';
import dish2 from '../images/dish2.jpg';
import dish3 from '../images/dish3.jpeg';
import dish4 from '../images/dish4.jpg';
import dish5 from '../images/dish5.jpg';
import dish6 from '../images/dish6.jpg';
import dish7 from '../images/dish7.jpg';
import dish8 from '../images/dish8.jpg';
import dish9 from '../images/dish9.jpg';
import dish10 from '../images/dish10.jpg';
import dish11 from '../images/dish11.jpg';

const Menu = () => {
  const dishes = [
    { name: 'Tacos Arabes Puebla ', price: 'R35', img: dish2,explanation: 'Middle Eastern-inspired tacos with marinated pork, wrapped in a soft pita-like tortilla.'  },
    { name: ' Carne Asada Tacos ', price: 'R25', img: dish3,explanation: 'Grilled beef tacos topped with fresh cilantro and onions, served with a squeeze of lime.'  },
    { 
      name: 'Tacos Al Pastor', 
      price: 'R40', 
      img: dish4, 
      explanation: 'Mexican-style pork tacos marinated with pineapple and spices, served with onions and cilantro.' 
    },
    { 
      name: 'Barbacoa Tacos', 
      price: 'R45', 
      img: dish5, 
      explanation: 'Tender, slow-cooked beef tacos with a rich, savory flavor, topped with traditional Mexican garnishes.' 
    },
    { 
      name: 'Tacos de Cabeza', 
      price: 'R55', 
      img: dish6, 
      explanation: 'Soft and flavorful beef head meat tacos, offering a unique and authentic taste.' 
    },
  ];

  const dishess = [
    { 
      name: 'Tacos Campechanos', 
      price: 'R33', 
      img: dish7, 
      explanation: 'A mix of meats like beef, pork, and chorizo, giving a deliciously hearty flavor in each taco.' 
    },
    { 
      name: 'Chicken Tinga Tacos', 
      price: 'R27', 
      img: dish8, 
      explanation: 'Shredded chicken in a spicy chipotle tomato sauce, topped with onions and cilantro.' 
    },
    { 
      name: 'Carnitas Tacos', 
      price: 'R42', 
      img: dish9, 
      explanation: 'Slow-cooked, tender pork with a crispy finish, served with onions, cilantro, and lime.' 
    },
    { 
      name: 'Chorizo Tacos', 
      price: 'R39', 
      img: dish10, 
      explanation: 'Spicy Mexican sausage tacos with a robust flavor, balanced with fresh toppings.' 
    },
    { 
      name: 'Cochinita Pibil', 
      price: 'R51', 
      img: dish11, 
      explanation: 'Yucatán-style pulled pork, marinated in citrus and spices, for a tender, flavorful experience.' 
    },
  ];
  

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {/* Link to Side Dish page */}
      <div style={{ marginTop: '20px' }}>
        <Link to="/sidedish" className="side-dish-link">
          <button>See Side Dishes</button>
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

export default Menu;
