import React from 'react'
import laptop from "../../assets/laptop.jpg"

const Expert = () => {
    return (
        <div className='   max-w-[1240px]  mx-auto md:grid grid-cols-3'>

            <div className='md:w-[100%] col-span-1 text-center'>
                <img src={laptop} alt="" className='inline' />

            </div>
            <div className='col-span-2 flex flex-col justify-center p-3  sm:p-3'>
                <h1 className='text-[#00df9a] my-2 text-justify'>Learn from experts</h1>

                <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eveniet repudiandae doloremque rerum,
                    exercitationem error dolorum, ad sint quod nihil aspernatur ullam doloribus asperiores ea cumque ipsam
                    consectetur dolor tempora. Fuga praesentium aspernatur, ex quia aliquid quo. Quam, ratione? Iste eaque
                    consectetur harum facilis tempora et qui vitae doloribus error explicabo dolores, laudantium consequuntur
                    eligendi quod quam praesentium autem? Minus!</p>
                    <button className='bg-black  text-white p-3 w-[30%] inline'>Get started</button>
            </div>
        </div>
    )
}

export default Expert