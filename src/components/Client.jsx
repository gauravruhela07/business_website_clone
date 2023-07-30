import React from 'react'

import { client_person, client1, client2, client3, client4, client5 } from '../assets'

const Client = () => {

    const clientList = [client1, client2, client3, client4, client5];

  return (
    <div className="w-full h-[800px] flex flex-col bg-white">        
        <div className="flex flex-row mx-[10%] justify-center py-5">
            <div className="h-[455px] w-[570px] mr-7">
                <div className="flex flex-col py-10 my-10 ml-20">
                    <p className="flex justify-end text-4xl font-bold">Out Client</p>
                    <p className="flex justify-end mt-5">
                        A joint study by BCG and the World Federation of People 
                        <br/> Management Associations, based on a global survey,
                        <br/>focuses on three priority areas for HR action. Ut enim 
                        <br/>ad minim veniam, quis nostrud exercitation ullamco laboris 
                        <br/>nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        <br/>dolor in reprehenderit in voluptate velit esse cillum dolore 
                        <br/>eu fugiat nulla pariatur.
                    </p>
                    <div className='flex justify-end h-[45px]'>
                        <p className='mt-5'>Images by <a className="underline">FreePik</a></p>
                    </div>
                </div>
            </div>
            <div className="h-[455px] w-[570px] ml-7 relative">
                <img 
                    src={client_person}
                    alt="client person"
                    className="h-full p-7 object-contain z-10 absolute"
                />
                <div className="w-[299px] h-[251px] bg-[#654aff] mt-20 ml-20 absolute" />                
            </div>
        </div>
        <div className='flex justify-center mt-10'>
            {clientList.map((client) => (
                <img src={client} className='mx-10 py-5'/>
            ))}            
        </div>
    </div>
  )
}

export default Client