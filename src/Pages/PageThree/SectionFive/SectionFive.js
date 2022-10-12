import React from 'react';

import p3_s5_img1 from '../../../Images/Page3/Section5/Page3 Section5 Image1.png';

const SectionFive = () => {
    return (
        <>
            <div className="">
                <div className=" mx-auto max-w-2xl py-16 px-4  sm:py-24 sm:px-6 lg:max-w-full lg:py-0 lg:px-0 ">
                    <div className="relative overflow-hidden lg:min-h-[50vh] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#000000] before:opacity-70 before:z-30 before:bg-blend-luminosity">
                        <div className="absolute inset-0">
                            <img
                                src={p3_s5_img1}
                                alt=""
                                className="h-full w-full object-center object-fill"
                            />

                        </div>
                        <div className='absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center' >
                            <p className='text-4xl text-white font-bold tracking-wider mb-4'> Professional Cleaning Service here in Glasgow </p>

                            <button className='mt-8 text-gray-800 bg-white border border-white text-base px-6 py-2 text-center font-semibold '>Contact Us</button>
                        </div>


                    </div>

                </div>
            </div>
        </>
    );
};

export default SectionFive;