import React from 'react'
import portfolio from '../../data/portfolio'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
    <>
       <h2 className="font-bold mb-20 text-2xl text-center text-slate-900 dark:text-slate-300">My projects</h2>
      <div className='flex flex-col md:flex-row items-center justify-center '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black dark:text-white'>
            {portfolio.map(projects =>(
                <PortfolioItem
                    key={projects.id}
                    imgUrl={projects.imgUrl}
                    title={projects.title}
                    stack={projects.stack}
                    link={projects.link}
                />
            ))}
        </div>
    </div>
    </>
    
  )
}

export default Portfolio