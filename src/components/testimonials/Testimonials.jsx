import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'



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
        name: 'Kumar Chaudhary',
        position: 'Software Engineer',
        review: ` A dedicated BCA student with expertise front- end development, PHP Laravel framework, Laravel API,
        and React JS, seeking opportunities to utilize my skills
        and knowledge in the creation and deployment
        cutting - edge websites.  A dedicated BCA student with expertise front- end development, PHP Laravel framework, Laravel API,
        and React JS, seeking opportunities to utilize my skills
        and knowledge in the creation and deployment
        cutting - edge websites.  A dedicated BCA student with expertise front- end development, PHP Laravel framework, Laravel API,
        and React JS, seeking opportunities to utilize my skills
        and knowledge in the creation and deployment
        cutting - edge websites.
          `
    },
    {
        avatar: AVTR2,
        name: 'Roshan Karki',
        position: 'Backend Developer',
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
                    data.map(({ avatar, name, position, review }) => {
                        return (
                            <SwiperSlide className="testimonials">
                                <div className="client__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <h4 className="client__name">{name}</h4>
                                <h5 className="client__name">{position}</h5>
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