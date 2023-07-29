import React from 'react'

import {storage, bandwidth, www} from '../assets/index.js';

const ProblemCard = ({src, alt, title, description}) => {
    return (
        <div className="flex flex-col h-[370px] w-[341px]">
            <div className="h-[88px] w-[88px] mx-auto rounded-full bg-[#d4cff0]">                
                <img 
                    src={src}
                    alt={alt}
                    className="flex mx-auto my-5 w-[44px] h-[44px] object-contain"
                />                
            </div>

            <p className="mx-auto my-10 text-[#654aff] text-xl">
                {title}
            </p>

            <p className="mx-auto text-slate-400 text-center">
                {description}
            </p>
        </div>
    )
}
const Problem = () => {

    const serviceList = [
        {src: storage, alt:"storage", title:'UNLIMITED STORAGE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'},
        {src: bandwidth, alt:"bandwidth", title: 'UNMETERED BANDWIDTH', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'},
        {src: www, alt:'www', title: 'DOMAIN REGISTRATION', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'}
    ]

  return (
    <div className="w-full h-[800px] bg-white">
        <div className="pt-12 lg:mx-[20%]">
            <p className='flex pt-10 text-6xl font-bold justify-center items-center'>We help and solve your<br/> business problem</p>
        </div>
        <div className='flex flex-row pt-12 lg:mx-[20%]'>
            {serviceList.map(service => (
                <ProblemCard
                    {...service}
                />
            ))}
        </div>        
        <button className='flex mt-10 mx-auto justify-center items-center border rounded-md px-8 py-2 bg-[#654aff] text-white'>
            READ MORE
        </button>        
    </div>
  )
}

export default Problem