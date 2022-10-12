import React from 'react';

import p1_s1_img1 from '../../../Images/Page1/Section1/Page1 Section1 Img1.png';
import p1_s1_img2 from '../../../Images/Page1/Section1/Page1 Section1 Img2.png';

const SectionOne = () => {
    return (
        <>
            <div className="bg-[#5093F7] pb-16 relative">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className='absolute z-10 -top-24 right-0 '>
                    <img className='' src={p1_s1_img2} alt="" />
                </div>


                <div className="max-w-7xl mx-auto">
                    {/* Content goes here */}
                    <div className='grid grid-cols-2 gap-x-4' >

                        <div className='space-y-10 py-10 col-span-1 mt-28 relative z-40'>
                            <div className='text-[#FFFFFF] font-semibold text-5xl font-sans'>
                                <h1 className='leading-snug tracking-normal'>Professional <span className='text-[#001A41]'>Cleaning Service </span>
                                    Specialising In Both Domestic And Commercial Cleaning.
                                </h1>
                            </div>
                            <div className='pt-4'>
                                <p className='text-[#FFFFFF] font-normal text-lg'>
                                    Welcome to Infiniti Cleaning Solutions, we are a fully licensed and insured company that provide
                                    nothing but the best service to all of our customers!
                                </p>
                            </div>
                            <div className='flex space-x-5'>
                                <button className='text-gray-800 text-base bg-[#FFFFFF] px-6 py-4 text-center rounded font-semibold'>Our Service </button>
                                {/* <button className=' text-base px-6 py-1 text-center rounded border-2 border-gray-400 font-semibold'>Watch Video</button> */}
                            </div>



                        </div>

                        <div className='col-span-1 relative z-50 -right-20'>
                            <div>
                                <img className='mt-28 ' src={p1_s1_img1} alt="" />
                            </div>
                        </div>



                    </div>
                </div>


            </div>

            <div className=" relative -top-16 z-30">

                <div className="max-w-7xl mx-auto">


                    <div className="bg-white shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-2xl font-medium leading-6 text-gray-900 mb-5">Request An Estimate</h3>

                            <form className="mt-10 sm:flex sm:items-center space-x-5 mb-5">
                                <div className="w-full sm:max-w-xs">
                                    <label htmlFor="email" className="sr-only">
                                        Name
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="w-full sm:max-w-xs">
                                    <label htmlFor="email" className="sr-only">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="w-full sm:max-w-xs">
                                    <label htmlFor="email" className="sr-only">
                                        Select Service
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Select Service"
                                    />
                                </div>
                                <div className="w-full sm:max-w-xs">
                                    <label htmlFor="email" className="sr-only">
                                        Post Code
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Post Code"
                                    />
                                </div>
                                <div className="w-3/4 mx-auto sm:max-w-xs">
                                    <button
                                        type="submit"
                                        className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        Submit Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>


        </>
    );
};

export default SectionOne;