import technologies from '../../data/technologies'

const Technology = () => {

    return (
        <>
            <div className='flex flex-wrap justify-center my-5 gap-7 py-10'>
                {technologies.map(technology => (
                    <div className='technology-container p-5 flex flex-col text-center justify-center items-center mb-4' key={technology.id}>
                        <img src={technology.imgUrl}></img>
                        <p className='font-semibold text-slate-900 dark:text-slate-300'>{technology.title}</p>
                    </div>
                ))}
            </div>

        </>
    )
}
export default Technology