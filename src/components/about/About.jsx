import React from 'react'
import './about.css'
import ME from '../../assets/cooMe-about.jpg'
import { RiFileWordFill } from 'react-icons/ri'
import { FaUserInjured } from 'react-icons/fa'
import { GoProject } from 'react-icons/go'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section id='about'>

            <h5>"True Change cannot be made if it is bound by laws and limitations, predictions and imagination."</h5>
            <h2>About Me</h2>

            <div className="container about_container">

                <div className="about_me">
                    <div className="about_me_image">
                        <img src={ME} alt="" />
                    </div>
                </div>


                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <RiFileWordFill className='about_icon' />
                            <h5>Experience</h5>
                            <small>
                                <a href="https://github.com/Coomar25"> Visit GitHub</a></small>
                        </article>

                        <article className="about_card">
                            <FaUserInjured className='about_icon' />
                            <h5>Field</h5>
                            <small>Software Engineer</small>
                        </article>

                        <article className="about_card">
                            <GoProject className='about_icon' />
                            <h5> Projects</h5>
                            <small>
                                <a href="https://github.com/Coomar25"> Visit GitHub</a></small>
                        </article>
                    </div>
                    <h1>An Illusion</h1>
                    <p>"Knowledge and awareness are vague, and perhaps better called illusions. Everyone lives within their own subjective interpretation." </p>
                    <Link to='/experience'> <button className='btn btn-primary'>Learn More</button></Link>
                </div>


            </div>

        </section>
    )
}

export default About




