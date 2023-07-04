import React from 'react';
import './footer.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer'>
            <a href="/" className='footer__logo'>Coo_Mar</a>

            <ul className="permalinks">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/experience'>Experience</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/testimonials'>Testimonials</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/kumarbhetwal25/" rel="noopener noreferrer" target="_blank"><BsFacebook /></a>
                <a href="https://www.instagram.com/coo_mar_25/" rel="noopener noreferrer" target="_blank"><BsInstagram /></a>
                <a href="https://www.linkedin.com/in/kumar-chaudhary-504126244/" rel="noopener noreferrer" target="_blank"><FiLinkedin /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Coo_Mar. All rights reserved.</small>
            </div>

            <div className='lowerfooter'></div>
        </footer>
    );
}

export default Footer;
