import React from 'react'
import CV from '../../assets/KumarChaudharyJune_LastWeek2024.pdf'
import { Link } from 'react-router-dom'


const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className='btn'>Download CV</a>
            <Link to='/contact'> <a href='#talk' className='btn btn-primary' >Let's Talk </a></Link>

        </div>
    )
}

export default CTA
