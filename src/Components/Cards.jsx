

import React from 'react'
import { Link } from 'react-router-dom'


const Cards = () => {
  return (
    <div className='w-full px-4 bg-white my-16'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10 mt-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 mr-8 rounded-lg hover:shadow-2xl hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-center py-8 text-[#c94b60] font-montserrat'>2 Hour Hire</h2>
                <p className='text-center text-4xl font-bold font-montserrat'>£249</p>
                <div className='text-center'>
                    
                    <p className='py-2 border-b mx-8 mt-6 font-medium font-raleway'>360° Photo Booth</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>360° Lighting</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Setup & Packdown</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Event Attendant</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Online Gallery Access</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>1-5 Person Platform</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>High Quality Props</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Apple Ipad</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Sent To You Instantly</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Ring Light</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Unlimited Visits</p>

                </div>
                <button className='bg-[#c94b60] text-white w-[200px] rounded-md font-semibold font-montserrat my-6 mx-auto px-6 py-3'></button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 ml-8 rounded-lg hover:shadow-2xl duration-300 hover:scale-105'>
                <h2 className='text-2xl font-bold text-center py-8 text-[#c94b60] font-montserrat'>3 Hour Hire</h2>
                <p className='text-center text-4xl font-bold font-montserrat'>£349</p>
                <div className='text-center'>
                    
                    <p className='py-2 border-b mx-8 mt-6 font-medium font-raleway'>360° Photo Booth</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>360° Lighting</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Setup & Packdown</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Event Attendant</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Online Gallery Access</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>1-5 Person Platform</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>High Quality Props</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Sent To You Instantly</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Party Lights</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Money Gun</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Ring Light</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Red Velvet Rope for Gold Statchions</p>
                    <p className='py-2 border-b mx-8 mt-2 font-medium font-raleway'>Apple Ipad</p>


                </div>
                <button className='bg-[#c94b60] text-white w-[200px] rounded-md font-semibold font-montserrat my-6 mx-auto px-6 py-3'></button>
            </div>
        </div>
    </div>
  )
}

export default Cards