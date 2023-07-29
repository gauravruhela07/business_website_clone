import React from 'react'

import {logo, tv, laptop, tablet, phone, cross} from '../assets/index.js'

const Navbar = () => {

    const screens = [tv, laptop, tablet, phone];
    return (
        <div className='flex justify-between w-full h-20 items-center bg-[#f2f2f2]'> 
            <img 
                src={logo}
                alt="logo"
                className="w-[123px] h-[40px] object-contain"
            />                            
            <div className="flex">
                {screens.map((screen, index) => (
                    <img 
                        src={screen}
                        alt={index}
                        className='flex-1 w-10 h-10 p-1 hover:bg-[#b8d5ef]'
                    />
                ))}
            </div>   
            <img 
                src={cross}
                alt="close"
                className='pr-3 my-auto'                
            />
        </div>
    )
}

export default Navbar