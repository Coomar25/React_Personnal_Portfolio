import React from 'react'
import CV from '../../assets/KumarChaudhary-CV.pdf'
import { Link } from 'react-router-dom'


const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className='btn'>Donwnload CV</a>
            <Link to='/contact'> <a href='#talk' className='btn btn-primary' >Let's Talk </a></Link>

        </div>
    )
}

export default CTA