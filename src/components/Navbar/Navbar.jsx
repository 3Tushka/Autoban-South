import React from 'react'
import { Route, Routes, Link } from "react-router-dom"
import Logo from '../../assets/Logo.png'
import './navbar.scss'

const Navbar = () => {
    return (
        <>
            <div className="transparent">
                <div className="wrapp">
                    <div className="navbar">
                        <div className="navbar-logo">
                            <img src={Logo} alt="Header-logo" />
                        </div>
                        <div className="navbar-content">
                            <ul className="navbar-links">
                                <li><Link to="/About">Про компанію</Link></li>
                                <li><Link to="/Activity">Сфери діяльності</Link></li>
                                <li><Link to="/Projects">Проєкти</Link></li>
                                <li><Link to="/Career"> Кар’єра </Link></li>
                                <li><Link to="/Press"> Прес-центр</Link></li>
                                <li><Link to="/Contacts"> Контакти </Link></li>
                            </ul>
                            <div className="navbar-language">
                                Filler
                                {/* Change Lang Tog */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;