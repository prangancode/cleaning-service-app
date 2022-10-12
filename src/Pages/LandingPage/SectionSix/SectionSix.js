import React from 'react';

import p1_s6_rec1 from '../../../Images/Page1/Section6/Page1 Section6 Rectangle1.png';
import p1_s6_rec2 from '../../../Images/Page1/Section6/Page1 Section6 Rectangle2.png';
import p1_s6_rec3 from '../../../Images/Page1/Section6/Page1 Section6 Rectangle3.png';
import p1_s6_img1 from '../../../Images/Page1/Section6/Page1 Section6 Image1.png';
import p1_s6_img2 from '../../../Images/Page1/Section6/Page1 Section6 Image2.png';
import p1_s6_img3 from '../../../Images/Page1/Section6/Page1 Section6 Image3.png';

const SectionSix = () => {
    return (
        <>
            <div className="pt-4 pb-20 ">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-7xl mx-auto">

                    {/* Content goes here */}
                    <div className='space-y-6 text-center pt-20 pb-16'>
                        <div className='text-[#162A43] font-semibold text-5xl font-sans'>
                            <h1 className='leading-snug'>We Don’t Cut Corners, We Clean Them </h1>
                        </div>

                        <p className='text-[#565151] font-normal text-lg font-sans tracking-wider'>
                            Our Simple three step process makes it easy from making your enquiry to having your work carried out.
                        </p>

                    </div>


                    <div className='grid grid-cols-3 gap-x-20 text-center' >

                        <div className='space-y-3 col-span-1'>

                            <div className='relative left-12'>
                                <img className='mb-6 ' src={p1_s6_rec1} alt="" />
                                <div className='absolute z-20 top-16 left-16'>
                                    <img className='' src={p1_s6_img1} alt="" />
                                </div>
                            </div>

                            <div className='text-[#162A43] font-semibold text-xl font-sans '>
                                Fill Out Our Online Enquiry Form
                            </div>

                            <p className='text-[#565151] font-normal text-md'>
                                Infiniti Cleaning Solutions is a fully <br /> licensed and insured

                            </p>

                        </div>
                        <div className='space-y-3 col-span-1 '>

                            <div className='relative left-12'>
                                <img className='mb-6 ' src={p1_s6_rec1} alt="" />
                                <div className='absolute z-20 top-16 left-16'>
                                    <img className='mb-6' src={p1_s6_img1} alt="" />
                                </div>
                            </div>

                            <div className='text-[#162A43] font-semibold text-xl font-sans '>
                                Receive Confirmation
                            </div>

                            <p className='text-[#565151] font-normal text-md'>
                                Infiniti Cleaning Solutions is a fully <br /> licensed and insured

                            </p>

                        </div>
                        <div className='space-y-3 col-span-1'>

                            <div className='relative left-12'>
                                <img className='mb-6 ' src={p1_s6_rec3} alt="" />
                                <div className='absolute z-20 top-16 left-16'>
                                    <img className='mb-6' src={p1_s6_img3} alt="" />
                                </div>
                            </div>

                            <div className='text-[#162A43] font-semibold text-xl font-sans '>
                                Enjoy A Premium Service
                            </div>

                            <p className='text-[#565151] font-normal text-md'>
                                Infiniti Cleaning Solutions is a fully <br /> licensed and insured
                            </p>

                        </div>







                    </div>
                </div>


            </div>
        </>
    );
};

export default SectionSix;