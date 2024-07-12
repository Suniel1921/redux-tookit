import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Home from './Home';
import { clearCart, removeItem } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store)=> store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = ()=>{
    dispatch(clearCart());

  }

  const handleDeleteCart = (product)=>{
    dispatch(removeItem(product));
  }

  return (
    <>
        <h3>welcome to cart page</h3>
        <button onClick={handleClearCart}>Clear Cart</button>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {cartItems.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px', textAlign: 'center' }}>
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <button onClick={()=>handleDeleteCart(product)}>Delete</button>
            <button onClick={()=> handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart