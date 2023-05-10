import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com" target="_blank"><FaGithub /></a>
            <a href="https://instagram.com" target="_blank"><BsInstagram /></a>
            <a href="https;//facebook.com" target="_blank"><BsFacebook /></a>
        </div>
    )
}

export default HeaderSocial