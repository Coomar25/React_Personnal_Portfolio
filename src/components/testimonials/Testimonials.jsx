import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




const data = [
    {
        avatar: AVTR1,
        name: 'Coo_mar ko darling',
        review: 'lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur'
    },
    {
        avatar: AVTR2,
        name: 'Coo_mar ko new darling',
        review: 'lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur'
    },
    {
        avatar: AVTR3,
        name: 'Coo_mar ko old darling',
        review: 'lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur'
    },
    {
        avatar: AVTR4,
        name: 'Coo_mar ko old darling',
        review: 'lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur'
    }
]

const Testimonials = () => {
    return (
        <section id='#testimonial'>

            <h5>Review For Client</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination, Navigation]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false // autoplay continues even when user interacts with swiper
                }} // add autoplay parameter
            >
                {
                    data.map(({ avatar, name, review }) => {
                        return (
                            <SwiperSlide className="testimonials">
                                <div className="client__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client_review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

        </section>
    )
}

export default Testimonials