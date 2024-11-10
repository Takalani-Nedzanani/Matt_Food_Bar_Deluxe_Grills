import React from 'react';
import '../Menu.css';
//import { Link } from 'react-router-dom';
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


const Recipes = () => {
  const dishes = [
    { 
      name: 'Tacos Arabes Puebla', 
      
      img: dish2,
      
      recipe: [
        'Marinate pork in spices for 2 hours.',
        'Cook marinated pork on a grill until tender.',
        'Serve in a pita with fresh toppings.'
      ]
    },
    { 
      name: 'Carne Asada Tacos', 
      
      img: dish3,
      
      recipe: [
        'Marinate beef with lime juice, garlic, and spices for 1 hour.',
        'Grill the beef until medium-rare, then slice thinly.',
        'Serve with cilantro, onions, and lime wedges.'
      ]
    },
    { 
      name: 'Tacos Al Pastor', 
      
      img: dish4,
     
      recipe: [
        'Marinate pork with pineapple juice and spices for 3 hours.',
        'Cook pork on a grill or stovetop until caramelized.',
        'Serve with diced onions and cilantro.'
      ]
    },
    { 
      name: 'Barbacoa Tacos', 
      
      img: dish5,
      
      recipe: [
        'Slow-cook beef in a broth with spices for 6 hours.',
        'Shred the meat and serve with salsa and toppings of choice.'
      ]
    },
    { 
      name: 'Tacos de Cabeza', 
    
      img: dish6,
      
      recipe: [
        'Simmer beef head meat with onions and spices for 8 hours.',
        'Shred the meat and serve in tortillas with fresh garnishes.'
      ]
    },
   

  ];

const dishessss =[ { 
  name: 'Grilled Wings', 
 
  img: wings, 
  
  recipe: [
    'Marinate wings with salt, pepper, and paprika for 30 minutes.',
    'Grill wings over medium heat for 15-20 minutes, turning occasionally.',
    'Serve hot with your favorite dipping sauce.'
  ]
},
{ 
  name: 'Baked Wings', 
  
  img: wing1,
  
  recipe: [
    'Preheat oven to 200°C (400°F).',
    'Coat wings in olive oil, salt, and pepper.',
    'Bake for 30-35 minutes, turning halfway, until crispy.'
  ]
},
{ 
  name: 'Cooked Wings', 
  
  img: wing2,
  
  recipe: [
    'Season wings with garlic, onion powder, and your choice of spices.',
    'Slow-cook in a pot on low heat for 2 hours, or until tender.',
    'Serve with fresh herbs or a dipping sauce.'
  ]
},
{ 
  name: 'Crispy Wings', 
  
  img: wing3,
  
  recipe: [
    'Coat wings in flour seasoned with salt and paprika.',
    'Deep-fry in hot oil for 10-12 minutes until golden brown.',
    'Drain excess oil and serve with dipping sauce.'
  ]
},
{ 
  name: 'Crispy Chips', 
 
  img: chips,
  
  recipe: [
    'Peel and slice potatoes thinly.',
    'Soak in water for 10 minutes, then dry thoroughly.',
    'Deep-fry in hot oil until golden and crispy, then season with salt.'
  ]
},
];


  const dishess = [
    { 
      name: 'Tacos Campechanos', 
      
      img: dish7,
      
      recipe: [
        'Cook beef, pork, and chorizo until crispy.',
        'Chop and mix all meats together.',
        'Serve in tortillas with toppings of choice.'
      ]
    },
    { 
      name: 'Chicken Tinga Tacos', 
      
      img: dish8,
      
      recipe: [
        'Cook shredded chicken with chipotle peppers and tomato sauce.',
        'Simmer until sauce thickens.',
        'Serve with onions and cilantro on tortillas.'
      ]
    },
    { 
      name: 'Carnitas Tacos', 
      
      img: dish9,
      
      recipe: [
        'Slow-cook pork with garlic and spices until tender.',
        'Crisp up the pork in a hot pan.',
        'Serve with fresh onions, cilantro, and lime.'
      ]
    },
    { 
      name: 'Chorizo Tacos', 
      
      img: dish10,
      
      recipe: [
        'Cook chorizo in a pan until browned.',
        'Serve in tortillas with onions, cilantro, and salsa.'
      ]
    },
    { 
      name: 'Cochinita Pibil', 
      
      img: dish11,
      
      recipe: [
        'Marinate pork in citrus and spices overnight.',
        'Slow-cook pork in banana leaves for 4-6 hours.',
        'Shred and serve with pickled onions.'
      ]
    },

    
  ];
  
  const dishesss =[
    { 
      name: 'Spicy Chips', 
      
      img: chips1,
      
      recipe: [
        'Prepare chips as usual.',
        'Toss chips in a blend of paprika, chili powder, and salt.',
        'Serve hot with extra seasoning to taste.'
      ]
    },
    { 
      name: 'Beef Burger', 
     
      img: beefB,
     
      recipe: [
        'Form ground beef into patties and season with salt and pepper.',
        'Grill or pan-fry for 4-5 minutes per side until cooked through.',
        'Assemble with lettuce, tomato, cheese, and desired condiments.'
      ]
    },
    { 
      name: 'Ground Burger', 
      
      img: groundB,
      
      recipe: [
        'Mix ground beef with smoked paprika, salt, and pepper.',
        'Form patties and grill for 4-5 minutes per side.',
        'Serve with caramelized onions and cheese on a toasted bun.'
      ]
    },
    { 
      name: 'Bacon Burger', 
       
      img: baconB,
      
      recipe: [
        'Cook bacon until crispy and set aside.',
        'Grill beef patty for 4-5 minutes per side.',
        'Top patty with cheese and bacon, then serve on a bun with condiments.'
      ]
    },
    { 
      name: 'Short Rib Burger', 
      
      img: ribB,
      
      recipe: [
        'Season and slow-cook short ribs until tender, then shred the meat.',
        'Form shredded ribs into patties or mix with ground beef.',
        'Grill and top with BBQ sauce, then serve on a bun.'
      ]
    },
  ];

  return (
    <div className="menu">
      <h2>Our Recipes</h2>
     
      <br />
      <div className="menu-items">
        {dishes.map((dish, index) => (
          <div key={index} className="menu-item">
            <img src={dish.img} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p className="explanation">{dish.explanation}</p>
           
            <h4>Recipe:</h4>
            <ul>
              {dish.recipe.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <br/>
      <div className="menu-items">
        {dishessss.map((dish, index) => (
          <div key={index} className="menu-item">
            <img src={dish.img} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p className="explanation">{dish.explanation}</p>
           
            <h4>Recipe:</h4>
            <ul>
              {dish.recipe.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
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
           
            <h4>Recipe:</h4>
            <ul>
              {dish.recipe.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <br/>
      <div className="menu-items">
        {dishesss.map((dish, index) => (
          <div key={index} className="menu-item">
            <img src={dish.img} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p className="explanation">{dish.explanation}</p>
           
            <h4>Recipe:</h4>
            <ul>
              {dish.recipe.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
