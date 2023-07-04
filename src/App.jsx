import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



const App = () => {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<Header />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/testimonials' element={<Testimonials />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>

            </Router>

            {/* <Header />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer /> */}

        </>
    )
}

export default App



// reaact functiional component rafce


