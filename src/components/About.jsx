import React from 'react'

import { discussion } from '../assets'

const About = () => {
  return (
    <div className='w-full'>
        <div className='h-[300px] w-full bg-white'></div>
        <div className="ml-[15%] mr-[35%]">    
            <div className='my-10'>
                <img 
                    src={discussion}
                    alt="dicussion"
                    className='-mt-[250px]  object-contain'
                />
                <h1 className="mt-10 text-white font-Montserrat text-8xl">
                    Business Transformation
                </h1>
            </div>   
        </div>
        <div className="ml-[10%] mr-[20%]">     
            <div className="md:flex mt-10 flex-start">
                <div className="flex-1 p-5">
                    <p className="text-white">
                        We excel in the business of human potential, and 
                        believe in its power to shape strategic, 
                        organizational, economic, and societal change. 
                        Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id 
                        est laborum.
                    </p>
                </div>
                <div className="flex-1 p-5">
                    <p className="text-white">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum. Image from &nbsp;
                    <a className="text-white underline underline-offset-2">Freepik</a>
                    </p>     

                    <button className="mt-10 font-inter font-medium text-[#654aff] px-8 py-2 rounded-md border bg-white">
                        READ MORE
                    </button>               
                </div>
            </div>
        </div>            
    </div>
  )
}

export default About