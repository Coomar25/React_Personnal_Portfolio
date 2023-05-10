import React, { useEffect, useState } from 'react'
import './portfolio.css'
import axios from 'axios';
// import IMG1 from '../../assets/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'


// const data = [
//     {
//         id: 1,
//         image: IMG1,
//         title: "Insert Title here",
//         github: 'https://github.com',
//         demo: 'http://www.kumarchaudhary.lovestoblog.com/'
//     },

//     {
//         id: 2,
//         image: IMG2,
//         title: "Insert Title here",
//         github: 'https://github.com',
//         demo: '#'
//     },
//     {
//         id: 3,
//         image: IMG3,
//         title: "Insert Title here",
//         github: 'https://github.com',
//         demo: '#'
//     },
//     {
//         id: 4,
//         image: IMG4,
//         title: "Insert Title here",
//         github: 'https://github.com',
//         demo: '#'
//     },

//     {
//         id: 5,
//         image: IMG5,
//         title: "Insert Title here",
//         github: 'https://github.com',
//         demo: '#'
//     }, {
//         id: 6,
//         image: IMG6,
//         title: "Insert Title here",
//         github: 'https://github.com',
//         demo: '#'
//     }
// ]





function Portfolio() {


    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://api.github.com/users/Coomar25/repos');
            setData(response.data);
        }
        fetchData();
    }, []);

    return (
        <section className='portfolioSection' id='portfolio'>

            <h5>MY Recent Work</h5>
            <h5>Entire Github Repo Are Fetched From Github API</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">

                {
                    data.map(({ id, avatar_url, html_url, description, owner, name, demo }) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={avatar_url} alt="" />
                                </div>
                                <h3>{owner.login}</h3>
                                <h3>{name}</h3>
                                <p>{description}</p>
                                <div className="newcta">
                                    <a href={html_url} className='btn'> Visit Repo</a>
                                    {/* <a href={demo} className='btn btn-primary' target='_blank'> LiveDemo</a> */}
                                </div>

                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio