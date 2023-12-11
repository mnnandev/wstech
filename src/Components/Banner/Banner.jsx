import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {


    return (
        <div className='bg-[#2699fb] w-full py-[50px]'>
            <div className='max-w-[1240px] mx-auto text-center font-bold py-[100px]'>
                <div className='text-xl md:texl md:p-[24px]'>learn with us</div>
                <h2 className='text-white text-3xl md:text-[80px] md:p-[24px]'>Grow with us.</h2>
                <div className='text-white text-[20px] md:text-[50px] md:p-[24px]'>learn
                    <span className='md:ml-[15px] ml-[5px]'>
                        <Typewriter
                            words={['web devlopment', 'Digital marketing', 'Code', 'Ethical Hacking']}
                            loop={Infinity}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </div>
                <button className='bg-black text-white p-3 d-inline'>Get started</button>

            </div>
        </div>
    )
}

export default Banner;
