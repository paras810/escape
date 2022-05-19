import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
       
            <header className='header'>
                <nav className='navbar'>
                    <div className="logo">PARAS</div>
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/categories">categories</Link></li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                </nav>
            </header>

           
        </>
    )
}

export default Navbar