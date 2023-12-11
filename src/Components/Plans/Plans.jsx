import React from 'react';
import single from "../../assets/single.png"
import double from "../../assets/double.png"
import triple from "../../assets/triple.png"

const Plans = () => {
    return (
        <div className='md:py-[100px] px-3'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-5 '>
                <div className='px-3 text-center shadow-xl my-4 border border-black h-[450px] hover:scale-105 duration-500 cursor-pointer flex flex-col items-center'>
                    <img src={single} alt="" className='h-{40px} w-[100px]'/>
                    <h1 className='text-3xl font-bold mt-4'>web development</h1>
                    <span className='text-3xl font-bold mt-4'>149$</span>
                    <p className='mt-4 font-bold'>Lorem ipsum dolor sit amet consectetur.</p>
                    <p className='mt-4 font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, libero.</p>
                    <p className='mt-4 font-bold'>Lorem ipsum dolor sit.</p>
                    <button className='bg-black  py-2 px-9 text-white p-2 rounded mt-4'>start trail</button>
                </div>
                <div className='px-3 text-center shadow-xl my-4 border border-black h-[450px] hover:scale-105 duration-500 cursor-pointer flex flex-col items-center'>
                    <img src={double} alt="" className='h-{40px} w-[100px]'/>
                    <h1 className='text-3xl font-bold mt-4'>Digital marketing</h1>
                    <span className='text-3xl font-bold mt-4'>149$</span>
                    <p className='mt-4 font-bold'>Lorem ipsum dolor sit amet consectetur.</p>
                    <p className='mt-4 font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, libero.</p>
                    <p className='mt-4 font-bold'>Lorem ipsum dolor sit.</p>
                    <button className='bg-black  py-2 px-9 text-white p-2 rounded mt-4'>start trail</button>
                </div>
                <div className='px-3 text-center shadow-xl my-4 border border-black h-[450px] hover:scale-105 duration-500 cursor-pointer flex flex-col items-center'>
                    <img src={triple} alt="" className='h-{40px} w-[100px]'/>
                    <h1 className='text-3xl font-bold mt-4'>Ethical hacking</h1>
                    <span className='text-3xl font-bold mt-4'>149$</span>
                    <p className='mt-4 font-bold'>Lorem ipsum dolor sit amet consectetur.</p>
                    <p className='mt-4 font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, libero.</p>
                    <p className='mt-4 font-bold'>Lorem ipsum dolor sit.</p>
                    <button className='bg-black text-white py-2 px-9 rounded mt-4 '>start trail</button>
                </div>
            </div>
        </div>
    );
};

export default Plans;
