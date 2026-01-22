




// // ADDED SCROLLING
// import React, { useState } from 'react';
// import styles from './ProductButtons.module.css'; // Importing styles from CSS module

// // List of category objects with name and id
// const categories = [
//   { name: 'All', id: 'all' },
//   { name: 'Accessories', id: 'Accessories' },
//   { name: 'USBs', id: 'USBs' },
//   { name: 'Mic and Headphones', id: 'MicAndHeadphones' },
//   { name: 'Mouse and MousePads', id: 'MouseandMousePads' },
//   { name: 'Trimmers', id: 'Trimmers' },
//   { name: 'Perfumes', id: 'Perfumes' },
//   { name: 'Watches', id: 'Watches' },
//   { name: 'Power Banks', id: 'PowerBanks' },

//   { name: 'Sports', id: 'sports' },

// ];

// // Main component to render category buttons
// const ProductButtons = ({ onSelectCategory }) => {
//   const [selectedCategory, setSelectedCategory] = useState('all'); // State for the currently selected category

//   // Handle category selection
//   const handleCategoryClick = (id) => {
//     setSelectedCategory(id); // Set selected category
//     onSelectCategory(id);    // Trigger callback for parent component
//   };


//   return (
//     <div className={styles.buttonContainer}>
//       {categories.map((category) => (
//         <button
//           key={category.id} // Use category id as the key for better performance
//           onClick={() => handleCategoryClick(category.id)} // Handle click to select category
//           className={`${styles.customButton} ${selectedCategory === category.id ? styles.activeButton : ''}`}
//         >
//           {category.name} {/* Display category name */}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ProductButtons;



import React, { useState } from 'react';
import styles from './ProductButtons.module.css';

const categories = [
  { name: 'All', id: 'all' },
  { name: 'Accessories', id: 'Accessories' },
  { name: 'Chargers & Cables', id: 'Chargers' },
  { name: 'Protectors', id: 'Protectors' },
  { name: 'USBs', id: 'USBs' },
  { name: 'Mic and Headphones', id: 'MicAndHeadphones' },
  { name: 'Mouse and MousePads', id: 'MouseandMousePads' },
  { name: 'Electronics', id: 'Electronics' },
  { name: 'Laptops', id: 'Laptops' },
  { name: 'Trimmers', id: 'Trimmers' },
  { name: 'Perfumes', id: 'Perfumes' },
  { name: 'Watches', id: 'Watches' },
  { name: 'Power Banks', id: 'PowerBanks' },
  { name: 'Sports', id: 'sports' },
];

const ProductButtons = ({ onSelectCategory, selectedCategory, applyDiscountToAll, closeSearchBar }) => {
  const [currentCategory, setCurrentCategory] = useState('all');

  const handleCategoryClick = (id) => {
    setCurrentCategory(id);
    onSelectCategory(id);
    closeSearchBar(); // Close search bar when a category is clicked
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.buttonContainer}>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`${styles.customButton} ${currentCategory === category.id ? styles.activeButton : ''
            }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default ProductButtons;