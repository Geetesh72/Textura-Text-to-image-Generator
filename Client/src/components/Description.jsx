import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
    return (
        <div className='flex flex-col items-center
    justify-center my-20 p-6 md:px-28'>
            <h1 className='text-3xl sm:text-4xl font-bold'>Create Ai Images</h1>
            <p className='text-gray-500 mb-8'>Transform thoughts into stunning visuals, effortlessly and beautifully</p>
            <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
                <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
                <div >
                    <h2 className='text-3xl font-medium max-w-lg'>Introducing the AI-Powered Text to Image Generator</h2>
                    <p className='text-gray-600 mb-4'>
                        "Transform thoughts into stunning visuals, effortlessly and beautifully. Harness the power of AI-driven text-to-image technology to bring your ideas to life with precision and creativity. With cutting-edge algorithms and a modern interface, turning imagination into breathtaking digital art has never been easier."
                    </p>
                    <p className='text-gray-600 mb-4'>

                        "Transform thoughts into stunning visuals with a simple prompt—just type, and let AI work its magic. Experience the seamless blend of technology and creativity as your words turn into captivating images effortlessly."
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Description