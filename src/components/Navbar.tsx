import React from 'react'
import { Link } from 'react-router-dom';

const Navbar: React.FC = function () {
    return (
        <nav className='navbar bg-light'>
            <ul className='nav'>
                <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/about">About</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/create-product">Create Product</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/posts">Posts</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/create-customer">Create Customer</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;