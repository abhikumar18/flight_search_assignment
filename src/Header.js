import React, { Component } from 'react';
import logo from './images/logo.jpg';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src ={logo} className="header__logo" alt="logo"/>
                <h2 className="header__title">Welcome to Flight Search Engine</h2>
            </div>
        )
    }
}

export default Header;