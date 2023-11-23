import technologies from '../../data/technologies'

const Technology = () => {

    return (
        <>
            <div className='flex flex-wrap justify-center my-5 gap-7'>
                {technologies.map(technology => (
                    <div className='technology-container flex flex-col text-center justify-center items-center' key={technology.id}>
                        <img className="" src={technology.imgUrl}></img>
                        <p>{technology.title}</p>
                    </div>
                ))}
            </div>

        </>
    )
}
export default Technology