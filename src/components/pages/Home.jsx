import React from 'react';
import { useDispatch } from 'react-redux';
import {addItem} from '../utils/cartSlice'



const products = [
  { id: 1, name: 'Product 1', price: '$10', category: 'Category 1' },
  { id: 2, name: 'Product 2', price: '$20', category: 'Category 2' },
  { id: 3, name: 'Product 3', price: '$30', category: 'Category 3' },
  { id: 4, name: 'Product 4', price: '$40', category: 'Category 4' },
  { id: 5, name: 'Product 5', price: '$50', category: 'Category 5' }
];

const Home = () => {
 const dispatch = useDispatch();




  const handleAddToCart = (product)=>{
    dispatch((addItem(product)))

  }
 

  return (
    <>
      <h3>Welcome to the Home Page</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px', textAlign: 'center' }}>
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <button onClick={()=> handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
