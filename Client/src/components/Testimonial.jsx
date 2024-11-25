import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center justify-center my-15 py-12'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-3'>Customer Testimonial</h1>
        <p className='text-gray-500 mb-12 text-3xl'>Peoples voice</p>
        <div className='flex flex-wrap gap-6'>
            {testimonialsData.map((item,index)=>(
                <div key={index} 
                className='bg-white/20 p-12 rounded-3xl shadow-md border
                w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300' >
                    <div className='flex flex-col items-center'>
                        <img src={item.image} alt=""
                        className='rounded-full w-14 h-14 object-cover' />
                        <h2 className='text-xl font-semibold mt-3'>{item.name}</h2>
                        <p className='text-gray-500 mb-4'>{item.role}</p>
                        <div className='flex mb-4'>
                            {Array(item.stars).fill().map((star,index)=>(
                                <img src={assets.rating_star} key={index} alt=""/>
                            ))}

                        </div>
                        <h2 className='text-center text-sm text-gray-600'>{item.text}</h2>

                        

                    </div>

                </div>
            ))}

        </div>

    </div>
  )
}

export default Testimonial