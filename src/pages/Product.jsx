import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class Product extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container">
                <h1 className="mt-5">This is a simple Product Component</h1>
                <Outlet />
            </div>
        );
    }
}

export default Product;