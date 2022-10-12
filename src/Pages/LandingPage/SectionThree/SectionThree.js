import React from 'react';

import p1_s3_img1 from '../../../Images/Page1/Section3/Page1 Section3 Image1.png';
import tickMark from '../../../Images/Page1/Section3/Vector.png';

const SectionThree = () => {
    return (
        <>
            <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-7xl mx-auto">
                    {/* Content goes here */}
                    <div className='grid grid-cols-2 gap-x-12' >

                        <div className='space-y-8 py-10 col-span-1 mt-8'>
                            <div className='text-[#162A43] text-5xl font-medium font-sans '>
                                Expert Top Quality <span className='text-[#5093F7]'>Cleaning Service!</span>
                            </div>
                            <p className='text-[#565151] font-normal text-lg'>
                                Infiniti Cleaning Solutions is a fully licensed and insured cleaning service company in Scotland. All of our expert domestic and commercial cleaners are fully trained, highly skilled and experienced.
                            </p>

                            <p className='text-[#565151] font-normal text-lg'>
                                With over 15+ years in cleaning service experience, we can insure that any work carried out will always be to the best quality.
                            </p>

                            <ul className=' space-y-4'>
                                <li className='font-normal text-sm text-[#565151] flex items-center '>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> Highly trained staff.
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" />Book, manage and pay online.
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> One-off, weekly or fortnightly visits, you choose!
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> All in all service.
                                </li>
                            </ul>


                        </div>

                        <div className='col-span-1 relative -right-12'>


                            <div>
                                <img className='mt-16' src={p1_s3_img1} alt="" />
                            </div>



                        </div>



                    </div>
                </div>


            </div>
        </>
    );
};

export default SectionThree;