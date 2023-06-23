import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience__frontend">

                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experience</small>
                            </div>

                        </article>

                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experience</small>
                            </div>

                        </article>
                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>React Js</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>Material UI</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                    </div>

                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Experience</small>
                            </div>

                        </article>

                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>Laravel</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>C#</h4>
                                <small className='text-light'>Experience</small>
                            </div>

                        </article>
                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>MySql</h4>
                                <small className='text-light'>Experience</small>
                            </div>

                        </article>
                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>JAVA</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>Laravel API Server</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>Postman</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className="expereience__details">
                            <BsFillPatchCheckFill />
                            <div>
                                <h4>Node Js</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience