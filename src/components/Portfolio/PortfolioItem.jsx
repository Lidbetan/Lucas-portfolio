import React from 'react'

const PortfolioItem = ({ id, title, imgUrl, stack, link}) => {
    return (
        <div>
            <img src={imgUrl}
                alt="portfolio-img"
                className='w-full h-36 md:h-48'>
            </img>
            <div className='w-full p-4'>
                <h3>{title}</h3>
                <p>
                    {stack.map((item, i) =>(
                        <span key={[i]}>{item}</span>
                    ))}
                </p>

            </div>
        </div>
    )
}

export default PortfolioItem