import React from 'react'
import CV from '../../assets/cv.pdf'
import { Link } from 'react-router-dom'


const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className='btn'>Donwnload CV</a>
            <Link to='/contact'> <a className='btn btn-primary' >Let's Talk </a></Link>

        </div>
    )
}

export default CTA