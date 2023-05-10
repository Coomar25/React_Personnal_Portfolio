import React from 'react'
import './nav.css'
import { SiHomeadvisor } from 'react-icons/si'
import { FaUserGraduate } from 'react-icons/fa'
import { BsBookHalf } from 'react-icons/bs'
import { FcServices } from 'react-icons/fc'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsGithub } from 'react-icons/bs'
import { GiThreeFriends } from 'react-icons/gi'

function Nav() {

    const [activeNav, setactiveNav] = useState('#');

    return (

        <nav>
            <Link to="/">    <a onClick={() => setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}><SiHomeadvisor /></a></Link>
            <Link to='/about'>  <a onClick={() => setactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserGraduate /> </a></Link>
            <Link to='/experience'> <a onClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BsBookHalf /></a></Link>
            <Link to='/services'> <a onClick={() => setactiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} ><FcServices /></a></Link>
            <Link to='/portfolio'> <a onClick={() => setactiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} ><BsGithub /></a></Link>
            <Link to='/testimonials'> <a onClick={() => setactiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} ><GiThreeFriends /></a></Link>
            <Link to='/contact'> <a onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a></Link>
        </nav>
    )
}

export default Nav