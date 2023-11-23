import React, { useContext } from 'react'
import ThemeContext from './context/ThemeContext'

const Contact = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className='flex flex-col mb-10 mx-auto '>
            <div className='flex justify-center items-center'>

                <a target="_blank" href='https://www.linkedin.com/in/lucas-id-betan-dev/'>
                    {theme === "dark" ?
                        <div>
                            <box-icon name='linkedin-square' type='logo' animation='tada-hover' color='#cbd5e1' size="lg" ></box-icon>
                        </div>
                        :
                        <div>
                            <box-icon name='linkedin-square' type='logo' animation='tada-hover' color='#475569' size="lg" ></box-icon>
                        </div>
                    }
                </a>
                <a target='_blank'>
                    {theme === "dark" ?
                        <div>
                            <box-icon name='envelope' type='solid' animation='tada-hover' color="#cbd5e1" size="lg"></box-icon>
                        </div>
                        :
                        <div>
                            <box-icon name='envelope' type='solid' animation='tada-hover' color="#475569" size="lg"></box-icon>
                        </div>
                    }
                </a>


            </div>
        </div>
    )
}

export default Contact