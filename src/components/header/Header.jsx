import React from 'react'
import './header.css'
import CTA from './CTA'
import cooMe from '../../assets/cooMe.png'
import HeaderSocial from './HeaderSocial'
import Nav from '../nav/Nav'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header id='home'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Kumar Chaudhary</h1>
                <h5 className='text-white'>Web Developer</h5>
                <CTA />
                <Link to='/contact'><HeaderSocial /></Link>


                <div className="me">
                    <img src={cooMe} alt="i'm coomar" />
                </div>
                <Link to='/contact'><a className='scroll__down'>Get In Touch With Me</a></Link>
            </div>

            <Nav />

        </header>
    )
}

export default Header