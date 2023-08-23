import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const URL = "http://localhost:3001/api/v1";

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`${URL}/products/${id}`);
      if (response.ok) {
        const productData = await response.json();
        setProductDetails(productData);
      } else {
        console.error('Error fetching product details:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  return (
    <div>
      {productDetails ? (
        <div>
          <h2>Product Details for ID: {id}</h2>
          <img src={productDetails.imageURL} alt={productDetails.name} style={{ maxWidth: '50%', height: 'auto' }} />
          <p>Name: {productDetails.name}</p>
          <p>Price: {productDetails.price}</p>
          <p>Description: {productDetails.description}</p>
          
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetail;
