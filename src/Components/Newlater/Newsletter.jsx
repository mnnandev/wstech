import React from 'react'

const Newsletter = () => {
    return (
        <div className='bg-[#2699fb] py-[50px] mx-auto'>
            <div className='max-w-[1240px] mx-auto md:flex justify-between'>
                <div className='m-2'>
                    <h1 className='text-[20px]  md:text-[40px] font-bold text-white'>
                        Want to learn latest IT. Skills?
                    </h1>
                    <span className='text-[white]'>sign up to our Newsletter and stay upto date</span>

                </div>
                <div className='m-2 '>
                 <input type="text" className='p-3 mr-2 text-slate-600 outline-none' placeholder='Email' />
                 <button className='bg-black text-white p-3 rounded mt-1 sm:mt-[5px]]'>Notify me</button>
                 <br />
                 <p className='text-white'>we care about the protection of your data.
                 <br />
                 <a href="#" className='text-black'> Read our privacy policy.</a></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter