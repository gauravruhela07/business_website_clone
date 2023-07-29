import React, { useState } from 'react'

import { logo_text, three_horizontal_line } from '../assets/index.js';

const Menu = () => {

    const [open, setOpen] = useState(false);

    const handleClickMenu = () => {
        const isOpen = open;
        setOpen(!isOpen);
    }

    return (
        <div className='flex flex-row w-full h-20 items-center bg-white'>
            <div className='flex-1'>
                <img 
                    src={logo_text}
                    alt="logo_text"
                    className='mx-auto w-[64px] h-[32px] object-contain'
                />
            </div>
            <div className='flex-1'>
                <img 
                    src={three_horizontal_line}
                    alt="three_horizontal_line"
                    className='mx-auto w-10 h-10 object-contain'
                    onClick={handleClickMenu}
                />
            </div>            
        </div>
    )
}

export default Menu