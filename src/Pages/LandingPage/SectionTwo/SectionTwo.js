import React from 'react';

import p1_s2_r11 from '../../../Images/Page1/Section2/Page1 Section2 Rectangle11.png';
import p1_s2_r12 from '../../../Images/Page1/Section2/Page1 Section2 Rectangle12.png';
import p1_s2_r13 from '../../../Images/Page1/Section2/Page1 Section2 Rectangle13.png';
import p1_s2_img0 from '../../../Images/Page1/Section2/Page1 Section2 Image0.png';
import p1_s2_img1 from '../../../Images/Page1/Section2/Page1 Section2 Image1.png';
import p1_s2_img2 from '../../../Images/Page1/Section2/Page1 Section2 Image2.png';

const SectionTwo = () => {
    return (
        <>
            <div className="">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-7xl mx-auto">

                    {/* Content goes here */}
                    <div className='pt-4'>
                        <h1 className='text-4xl font-mono font-semibold text-center'>Why Work With Infiniti?</h1>

                    </div>
                    <div className='pt-4'>

                        <img className='w-1/3 mx-auto' src={p1_s2_img0} alt="" />
                    </div>

                    <div className='grid grid-cols-3 gap-x-12' >

                        <div className='space-y-3 py-10 col-span-1'>

                            <div className='relative'>
                                <img className='mb-6 ' src={p1_s2_r11} alt="" />
                                <div className='absolute z-20 top-20 left-16'>
                                    <img className='mb-6 w-2/3 mx-auto' src={p1_s2_img1} alt="" />
                                </div>
                            </div>



                        </div>
                        <div className='space-y-3 py-10 col-span-1'>

                            <div className='relative'>
                                <img className='mb-6 ' src={p1_s2_r12} alt="" />
                                <div className='absolute z-20 top-20 left-16'>
                                    <img className='mb-6 w-2/3 mx-auto' src={p1_s2_img2} alt="" />
                                </div>
                            </div>



                        </div>
                        <div className='space-y-3 py-10 col-span-1'>

                            <div className='relative'>
                                <img className='mb-6 ' src={p1_s2_r13} alt="" />
                                <div className='absolute z-20 top-20 left-16'>
                                    <img className='mb-6 w-2/3 mx-auto' src={p1_s2_img1} alt="" />
                                </div>
                            </div>



                        </div>







                    </div>
                </div>


            </div>
        </>
    );
};

export default SectionTwo;