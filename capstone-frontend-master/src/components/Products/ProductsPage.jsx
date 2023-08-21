import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';

import Card from '@mui/material/Card';

function ProductsPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState('default');
  const fetchCategories = async () => {
    const url = 'http://localhost:3001/api/v1';
    try {
      const response = await fetch(`${url}/products/categories`);
      if (response.ok) {
        const categories = await response.json();
        // Handle the categories data
        return categories;
      } else {
        console.error('Error fetching categories:', response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error('Fetch error:', error);
      // Handle fetch error
    }
  };
  
  useEffect(() => {
    fetchCategories()
    // Fetch categories from the backend and set in state
    // Fetch products based on selectedCategory and sortingOption
  }, [selectedCategory, sortingOption]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortingChange = (option) => {
    setSortingOption(option);
  };

  return (
    <div>
      {/* Category Tabs */}
      {categories.map((category) => (
        <ToggleButton
          key={category.id}
          value={category.id}
          onChange={() => handleCategoryChange(category.id)}
        >
          {category.name}
        </ToggleButton>
      ))}

      {/* Sorting Options */}
      <button onClick={() => handleSortingChange('default')}>Default</button>
      <button onClick={() => handleSortingChange('priceHighToLow')}>Price High to Low</button>
      {/* ... other sorting options ... */}

      {/* Display Products */}
      {products.map((product) => (
        <Card key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          {/* ... other product details ... */}
          <button onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
        </Card>
      ))}
    </div>
  );
}

export default ProductsPage;
