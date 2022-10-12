import React from 'react';

import p2_s4_img1 from '../../../Images/Page2/Section4/Page2 Section4 Image1.png';

import p2_s4_img2_1 from '../../../Images/Page2/Section4/Page2 Section4 Image2-1.png';
import p2_s4_img2_2 from '../../../Images/Page2/Section4/Page2 Section4 Image2-2.png';
import p2_s4_img2_3 from '../../../Images/Page2/Section4/Page2 Section4 Image2-3.png';
import p2_s4_img2_4 from '../../../Images/Page2/Section4/Page2 Section4 Image2-4.png';
import p2_s4_img2_5 from '../../../Images/Page2/Section4/Page2 Section4 Image2-5.png';

import p2_s4_img3 from '../../../Images/Page2/Section4/Page2 Section4 Image3.png';

const SectionFour = () => {

    const posts = [
        {
            imageUrl: p2_s4_img2_1,
        },
        {
            imageUrl: p2_s4_img2_2,
        },
        {
            imageUrl: p2_s4_img2_3,
        },
        {
            imageUrl: p2_s4_img2_4,
        },
        {
            imageUrl: p2_s4_img2_5,
        },


    ]


    return (
        <>
            <div className="">
                <div className=" mx-auto max-w-2xl py-16 px-4  sm:py-24 sm:px-6 lg:max-w-full lg:py-0 lg:px-0 ">
                    <div className="relative overflow-hidden lg:min-h-[60vh] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#000000] before:opacity-70 before:z-30 before:bg-blend-luminosity">
                        <div className="absolute inset-0">
                            <img
                                src={p2_s4_img1}
                                alt=""
                                className="h-full w-full object-center object-fill"
                            />

                        </div>
                        <div className='absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' >
                            <p className='text-4xl text-white font-semibold tracking-wider'>Commercial Cleaning Company In Glasgow </p>
                        </div>
                        <div className='text-center absolute z-40 right-24 top-12'>
                            <button className='mt-16 text-gray-800 text-base bg-[#FFFFFF] px-6 py-2 text-center font-semibold '>GET A FREE QUOTE!</button>
                        </div>

                    </div>

                </div>
            </div>



            <div className="mb-20">

                <div className="relative max-w-7xl mx-auto">

                    <div className='space-y-6 text-center pt-20 pb-16'>
                        <div className='text-[#162A43] font-semibold text-5xl font-sans'>
                            <h1 className='leading-snug'>Commercial <span className='text-[#0096FF]'>Cleaning Company</span> In Scotland  </h1>
                        </div>

                        <p className='text-[#565151] font-normal text-lg font-sans tracking-wider'>
                            Our expert commercial cleaning services provide a cleaning solution for many industries across Scotland. At Infiniti, we have over 15 years of experience and in-depth industry knowledge, ensuring our clients are getting the best from our services. We are the obvious choice for all of your commercial cleaning requirements. We can tailor our business to your needs, making sure that all of your requirements are catered for. No matter how big the project, we’re ready to tackle it.
                        </p>

                    </div>



                    <div className=" max-w-lg mx-auto grid gap-20 lg:grid-cols-5 lg:max-w-none">
                        {posts.map((post) => (
                            <div key={post.title} className="flex flex-col w-3/4 mx-auto overflow-hidden">



                                <img className='' src={post.imageUrl} alt="" />




                            </div>
                        ))}
                    </div>


                </div>
            </div>

            <div className="">
                <div className=" mx-auto max-w-2xl py-16 px-4  sm:py-24 sm:px-6 lg:max-w-full lg:py-0 lg:px-0 ">
                    <div className="relative overflow-hidden lg:min-h-[60vh] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#000000] before:opacity-70 before:z-30 before:bg-blend-luminosity">
                        <div className="absolute inset-0">
                            <img
                                src={p2_s4_img3}
                                alt=""
                                className="h-full w-full object-center object-fill"
                            />

                        </div>
                        <div className='absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center' >
                            <p className='text-4xl text-white font-bold tracking-wider'> Get In Touch </p>
                            <p className='mt-8 text-lg text-white tracking-normal font-mono'>Our bespoke commercial cleaning solutions can include any number of services, arranged to fit around your schedule. We provide contract cleaning for commercial premises of all sizes: from small specialist boutiques to showrooms and shopping centres. No matter your business’s budget, Infiniti cleaning services can be adapted to you.</p>
                            <button className='mt-8 text-white border border-white text-base px-6 py-2 text-center font-semibold '>Contact Us</button>
                        </div>


                    </div>

                </div>
            </div>
        </>
    );
};

export default SectionFour;