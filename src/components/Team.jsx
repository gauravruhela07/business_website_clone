import React from 'react'

import {bob, mary, fb, twitter, insta} from '../assets';

const TeamCard = ({src, alt, title, name, description}) => {
    return (
        <div className="flex flex-row h-[350px] w-[600px] rounded-[12px] bg-white p-5 m-5">
            <div className="flex h-[186px] w-full">
                <img 
                    src={src}
                    alt={alt}
                    className='w-[186px] h-[186px]'
                />
                <div className="flex flex-col p-5 w-full">
                    <p className="text-[#c5baba]">{title}</p>
                    <p className="text-[#654aff] text-2xl font-bold py-5">{name}</p>
                    <p className="text-md font-sans">
                        {description}
                    </p>
                    <div className="flex flex-row py-10">
                        <img className="h-[32px] w-[32px] mr-5" src={fb} alt="fb"/>
                        <img className="h-[32px] w-[32px] mr-5" src={twitter} alt="twitter"/>
                        <img className="h-[32px] w-[32px] mr-5" src={insta} alt="insta"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Team = () => {

    const teamList = [
        {src:bob, alt:'bob', title: 'creative leader', name: 'Bob Brown', description: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum'},
        {src:mary, alt:'mary', title: 'sales manager', name: 'Mary Smith', description: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum'}
    ];

  return (
    <div className="w-full h-[800px] flex flex-col">        
        <p className='flex mx-auto pt-[80px] text-white text-6xl font-bold'>Meet The Team</p>  
        <div>
            <p className='mx-[25%] px-[10%] mt-20 text-center text-white text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </div>   
        <div>
            <p className="mt-10 text-center text-white text-xl">Image by <a className="underline underline-offset-2">Freepik</a></p>
        </div>   
        <div className="flex flex-row lg:mx-[15%] pt-10">
            {teamList.map((member) => (
                <TeamCard 
                    {...member}
                />
            ))}
        </div>
    </div>
  )
}

export default Team