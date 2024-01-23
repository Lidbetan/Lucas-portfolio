

const Intro = ({theme}) => {
    console.log(theme)
    return (
        <div className='h-screen flex flex-col items-center justify-center pb-6 text-black dark:text-white'>
            <h1 className=' font-bold text-4xl md:text-7xl mb-1 md:mb-3 '>Lucas Id Betan</h1>
            <h2 className={theme === "light" ? "title font-bold text-2xl md:text-4xl mb-1 md:mb-3" : "title-dark font-bold text-2xl md:text-4xl mb-1 md:mb-3" } >Frontend Developer</h2>
           
        </div>

    )
}

export default Intro