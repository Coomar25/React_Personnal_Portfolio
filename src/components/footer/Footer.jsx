import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FiLinkedin } from 'react-icons/fi'

function Footer() {
    return (
        <footer className='footer'>
            <a href="" className='footer__logo'>Coo_Mar</a>

            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__social">
                <a href="https://facebook.com"><BsFacebook /></a>
                <a href="https://instagram.com"><BsInstagram /></a>
                <a href="https://linkedin.com"><FiLinkedin /></a>
            </div>

            <div className="footer__copyright">
                <small>@copyright: Coo_Mar. All right reserve</small>
            </div>
            <div className='lowerfooter'></div>
        </footer>
    )
}

export default Footer