// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';

// // const ProductDetail = () => {
// //   const { id } = useParams();
// //   const [productDetails, setProductDetails] = useState(null);
// //  

// //   const fetchProductDetails = async () => {
// //     try {
// //       const response = await fetch(``);
// //       if (response.ok) {
// //         const productData = await response.json();
// //         setProductDetails(productData);
// //       } else {
// //         console.error('Error fetching product details:', response.statusText);
// //       }
// //     } catch (error) {
// //       console.error('Fetch error:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProductDetails();
// //   }, []);

// //   return (
// //     
// //   );
// // };

// // export default ProductDetail;
// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetail = () => {
//     const { id } = useParams();
//     const [productDetails, setProductDetails] = useState(null);
//     const URL = "http://localhost:3001/api/v1";

//     const fetchProductDetails = async () => {
//         try {
//             const response = await fetch(`${URL}/products/${id}`);
//             if (response.ok) {
//                 const product = await response.json();
//                 setProductDetails(product);
//             } else {
//                 console.error('Error fetching product details:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Fetch error:', error);
//         }
//     };

//     useEffect(() => {
//         fetchProductDetails();
//     }, [id]);

   
//         // Handle update logic
//         // Redirect or show update form
//         const handleUpdate = async () => {
//             // Open a form or modal for editing
//             // Collect updated product details from the form

//             try {
//                 const response = await fetch(`${URL}/products/${id}`, {
//                     method: 'PUT',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(),
//                 });

//                 if (response.ok) {
//                     // Product updated successfully
//                     // You might show a success message or redirect the user
//                 } else {
//                     console.error('Error updating product:', response.statusText);
//                     // Handle error case
//                 }
//             } catch (error) {
//                 console.error('Fetch error:', error);
//                 // Handle fetch error
//             }
//         };

  

//     const handleDelete = () => {
//         // Handle delete logic
//         // Redirect or show confirmation dialog
//     };

//     return (
//         <div>
//             {productDetails && (
//                 <div>

// //       {productDetails ? (
//                         <div>
//                             <h2>Product Details for ID: {id}</h2>
//                             <img src={productDetails.imageURL} alt={productDetails.name} style={{ maxWidth: '50%', height: 'auto' }} />
//                             <p>Name: {productDetails.name}</p>
//                             <p>Price: {productDetails.price}</p>
//                             <p>Description: {productDetails.description}</p>

//                         </div>
//                     ) : (
//                         <p>Loading product details...</p>
//                     )}


//                     {/* Button for update */}
//                     <button onClick={handleUpdate}>Update</button>
//                     {/* Button for delete */}
//                     <button onClick={handleDelete}>Delete</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProductDetail;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ProductDetail = () => {
    const navigate = useNavigate()
    
    const [quantity, setQuantity] = useState(1); // State to track quantity input
    const { id } = useParams();
        const [productDetails, setProductDetails] = useState(null);
        const URL = "http://localhost:3001/api/v1";
    
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`${URL}/products/${id}`);
                if (response.ok) {
                    const product = await response.json();
                    setProductDetails(product);
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
    
        const palceOrder = async () =>{
            const URl = "http://localhost:3001/api/v1";
            const BODY = {}
            try{
                const response = await fetch.post(`${URL}/cart`)
                console.log("Placed order");     
            }catch(e){

            }
        }
    
    return (
        <div className="product-detail">
            {productDetails ? (
                <div>
                    <img src={productDetails.imageURL} alt={productDetails.name} />
                    <h2>{productDetails.name}</h2>
                    <p>Price: ${productDetails.price}</p>
                    <p>Description: {productDetails.description}</p>
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button onClick={palceOrder}>Order</button>
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
};

export default ProductDetail;
