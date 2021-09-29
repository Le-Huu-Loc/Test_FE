import React from 'react';
import './Header.scss';
import logo from '../../images/logo.png';
import { FiMenu } from 'react-icons/fi'

function Header() {

    function handleOnClick() {
        const menuElement = document.querySelectorAll('.header__items ul')[0]
        menuElement.classList.toggle('show-menu')
    }
    function handleOnClickContainer(e) {
        e.stopPropagation();
        e.preventDefault()
        e.target.classList.remove('show-menu')
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="header__items">
                    <ul onClick={handleOnClickContainer}>
                        <li>Introduction</li>
                        <li>SOLUTION</li>
                        <li>RATE PLAN</li>
                        <li>LOGIN</li>
                        <li>APPLY FOR FREE USE</li>
                    </ul>
                    <div className="showHide-menu" onClick={handleOnClick}><FiMenu /></div>
                </div>
            </div>
        </div>
    );
}

export default Header;