import React from 'react'
import { motion, useAnimation } from "framer-motion";


const Grow = () => {
  return (    
    <div className="flex flex-col h-[800px] bg-white">
        <div className="mx-[20%] h-[170px] ">
            <p className="flex justify-center text-7xl text-[#654aff] font-bold pt-20">
                20k
            </p>
            <p className="flex justify-center text-center text-3xl pt-10">
                Our loyal and satisfied customers all <br/> over the globe has joined
            </p>
            <div className="flex justify-center mx-[20%]">
                <input 
                    type="text"
                    placeholder='Enter a valid email address'
                    className="bg-gray-50 border-gray-300 text-slate-900 text-lg rounded-lg focus:ring-[#654aff] focus:border-[#654aff] outline-none block w-full p-3"
                />
                <button className="font-inter font-medium text-white bg-[#654aff] px-12 py-3 rounded-lg">
                    SUBMIT
                </button>
            </div>
            <p className="flex justify-center mt-10 text-sm text-slate-600">Subbscribe to our newsletter and receive latest updates</p>            
        </div>     
        <div className="mt-auto h-[241px] bg-[#333333]">
            <div className="flex justify-center items-center h-[143px]">
                <p className="text-white text-sm ">
                    Sample text. Click to select the text box. Click again or double click to start editing the text.
                </p>
            </div>
            <div className="flex justify-center items-center text-white">                
                <a className="text-[#9691dd] underline hover:text-slate-600" href='#'>Website Templates </a>&nbsp;  created with &nbsp;
                <a className="text-[#9691dd] underline hover:text-slate-600" href='#'>Website Builder Software</a>.
            </div>
        </div>    
    </div>
       
  )
}

export default Grow