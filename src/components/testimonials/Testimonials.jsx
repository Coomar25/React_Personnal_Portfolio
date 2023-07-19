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
        avatar: AVTR2,
        name: 'Roshan Karki',
        position: 'Backend Developer',
        review: `
        I had the pleasure of working with Kumar Chaudhary, and I can confidently say that he is an exceptional backend developer. Kumar is a dedicated and enthusiastic professional with expertise in Django, Python, PHP Laravel framework, Laravel API, React JS and so on.

        Kumar's self-taught experience in backend development is impressive. One project that stands out is the Dairy Milk management system he developed in React JS and Laravel Api as Backend. It was well-designed, functional, and efficient.
        
        What sets Kumar apart is his professionalism and work ethic. He is a reliable team member who goes above and beyond to deliver results.
        
        I highly recommend Kumar to any organization in need of a talented backend developer. His skills, knowledge, and dedication make him an invaluable asset, and I have no doubt that he will continue to thrive in his career.
        `
    },
    {
        avatar: AVTR1,
        name: 'Kumar Chaudhary',
        position: 'Software Engineer',
        review: `
                    Hi, I am a software engineer consisting a handheld expreience in Backend
            Web Developement, API Engineer, App Development. With a strong foundation in web development
            and a focus on Django frameworks and Laravel framework, I am eager to apply my skills
            and contribute to the success of your organization so feel free to hire me. You Can Download CV if you wanted.Also, I am passionate about
            creating efficient and scalable backend solutions, and I am well-equipped to
            handle the challenges of developing robust web applications and building
            powerful APIs.

          `
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