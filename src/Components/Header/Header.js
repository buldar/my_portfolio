import React from 'react';
import x from './Header.module.css'
import Navigation from "./Navigation/Navigation";

const Header =() => {
    return (
        <div className={x.header}>
            <Navigation/>
        </div>
    )
}

export default Header;
