import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const cartItems =  useSelector((store)=> store.cart.items);
   

    return (
        <div className='navbar'>
            <h3>Logo</h3>
            <ul className='navlinks'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/cart'}>Cart ({cartItems.length})</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
