import React from 'react';

import p3_s3_img1 from '../../../Images/Page3/Section3/Page3 Section3 Image1.png';
import tickMark from '../../../Images/Page3/Section2/Page3 Section2 Image2.png';

const SectionThree = () => {
    return (
        <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="max-w-7xl mx-auto">
                {/* Content goes here */}
                <div className='grid grid-cols-2 gap-x-12' >

                    <div className='col-span-1 relative -left-4'>


                        <div>
                            <img className='mt-24' src={p3_s3_img1} alt="" />
                        </div>



                    </div>

                    <div className='space-y-8 py-10 col-span-1 mt-8'>
                        <div className='text-[#162A43] text-5xl font-medium font-sans '>
                            Why Choose Novanna <span className='text-[#5093F7]'>Cleaning Service!</span>
                        </div>
                        <p className='text-[#565151] font-normal text-lg'>
                            Here at Infiniti we have combined over 15 years of experience with the latest technology to ensure that our customers receive the best possible service and are never left unsatisfied. We take pride in our customer service and our duties as a professional cleaning company. Our employees are fully insured and trained to a very sophisticated hygienic level so you can receive the perfect professional service.
                        </p>

                        <div>
                            <div className='text-[#162A43] text-2xl font-bold flex items-center tracking-wider'>
                                <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" />
                                <h1>Certified Professional Cleaners </h1>
                            </div>

                            <p className='text-[#565151] font-normal text-lg mt-4'>
                                It is a long established fact that a reader will be distracted the readable content of a page when.
                            </p>

                        </div>

                        <div>
                            <div className='text-[#162A43] text-2xl font-bold flex items-center tracking-wider'>
                                <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" />
                                <h1>Environmentally Friendly Cleaning </h1>
                            </div>

                            <p className='text-[#565151] font-normal text-lg mt-4'>
                                It is a long established fact that a reader will be distracted the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
                            </p>

                        </div>

                        <div>
                            <div className='text-[#162A43] text-2xl font-bold flex items-center tracking-wider'>
                                <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" />
                                <h1>100% Satisfaction Guaranteed</h1>
                            </div>

                        </div>
                        <div>
                            <div className='text-[#162A43] text-2xl font-bold flex items-center tracking-wider'>
                                <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" />
                                <h1>Available Evenings & Weekends</h1>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default SectionThree;