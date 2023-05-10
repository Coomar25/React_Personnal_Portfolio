import React from 'react'
import './services.css'
import { FaServicestack } from 'react-icons/fa'

function Services() {
    return (
        <section id='services'>
            <h5>What I Learned From Anime Called Naruto</h5>
            <h2>Naruto Quotes</h2>
            <div className="container services__container">



                {/* end of ui/ux services */}


                <article className="service">
                    <div className="service__head">
                        <h3>My Story Chapter 1</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <FaServicestack />
                            <p>In this world it's not how you live, it's how you die. A person's life is not measured by how they live but rather it's measured by what they accomplish before their death. And looking back, my life has really been full of nothing but failure. Continually ignored, hated, rejected by own father, not being able to made my mom feel happy and unable to being close to either my friends or my mentor. Compared to the great deeds of Mom my actions are all trifling, insignificant things and deed.

                                I wish I could have died. A tale is only good as it's final turn of events. A plot twist. And mistakes are important part of a plot, too. I lived my life always believing that the lessons I learned are what honed me.
                                I swore I'd accomplish a deed so great that it would obliterate all my failures.
                            </p>
                        </li>
                    </ul>
                </article>


                <article className="service">
                    <div className="service__head">
                        <h3>My Story Chapter 2</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <FaServicestack />
                            <p>         I wish i could die a splendid man, at least that's least that's how it's supposed to go. But my tale ending like this... My mom prophesied that I would be the one who brings happiness and joy on her face.
                                A person who would make a great choice that will bring either peace or destruction to the family.
                                I thought I would bring happiness, made the family prosperous and reduce the burden. But in the end, I failed that, too.
                                How pitiful. How sad that this will be the end twist to the tale of Mine. What a worthless story it turned out to be</p>
                        </li>
                        <li>
                            <FaServicestack />
                            <p>“So tell me where should I go?  To the left, where nothing is right… Or to the right, where nothing is left…”</p>

                        </li>


                        <li>
                            <FaServicestack />
                            <p>“People’s lives don’t end when they die. It ends when they lose faith.”</p>

                        </li>



                    </ul>
                </article>


                <article className="service">
                    <div className="service__head">
                        <h3>Itachi Uchiha Words</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <FaServicestack />
                            <p>"We do not know what kind of people we truly are until the moment before our deaths. As death comes to embrace you, you will realize what you are. That’s what death is, don’t you think?"</p>
                        </li>
                        <li>
                            <FaServicestack />
                            <p>"However strong you become, never seek to bear everything alone. If you do, failure is certain."</p>
                        </li>
                        <li>
                            <FaServicestack />
                            <p>“It is not wise to judge others based on your own perceptions and by their appearances.”</p>
                        </li>
                        <li>
                            <FaServicestack />
                            <p>Knowledge and awareness are vague, and perhaps better called illusions. Everyone lives within their own subjective interpretation.</p>
                        </li>
                        <li>
                            <FaServicestack />
                            <p>“He who forgives and acknowledges himself, that is what it truly means to be strong!”</p>
                        </li>




                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services