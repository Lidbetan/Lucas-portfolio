
const PortfolioItem = ({title, imgUrl, stack, link }) => {
    return (
        <div className='max-w-[425px] max-h-[340px] lg:h-[340px] border-2 border-stone-900 dark:border-stone-300 rounded-md overflow-hidden'>
            <div className='border-black border-b-{4px}'>
                <a href={link}>
                    <img src={imgUrl}
                        alt="portfolio-img"
                        className='w-full h-36 md:h-48 object-fit cursor-pointer '>
                    </img>
                </a>
            </div>
            <div className='p-4'>
                <h3 className='text-center text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
                <p className='flex flex-wrap gap-2 flew-row items-center justify-start text-xs md:text-sm '>
                    {stack.map((item, i) => (
                        <span 
                        className="m-auto inline-block px-2 py-1 font-semibold border-2
                                border-stone-900 dark:border-stone-300
                                bg-slate-600 dark:bg-slate-300 
                                text-white dark:text-black
                                rounded-md" key={[i]}>{item}</span>
                    ))}
                </p>

            </div>
        </div>
    )
}

export default PortfolioItem