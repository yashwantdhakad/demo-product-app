import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import CreateProduct from './components/CreateProduct';
import Posts from './components/Posts';
import CreateCustomer from './components/CreateCustomer';

const AppRouter: React.FC = function() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/create-product' element={<CreateProduct />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/create-customer' element={<CreateCustomer />} />
        </Routes>
    )
}

export default AppRouter;