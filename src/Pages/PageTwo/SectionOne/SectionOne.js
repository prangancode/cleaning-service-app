import React from 'react';
// import './P2s1breadcrumb.css'

import { HomeIcon } from '@heroicons/react/20/solid'

import p2_s1_img1 from '../../../Images/Page2/Section1/Page2 Section1 Image1.png';
import { Link } from 'react-router-dom';



const SectionOne = () => {

    const pages = [
        { name: 'Services', href: '#', current: false },
        { name: 'Cleaning Service', href: '#', current: true },
    ]

    return (
        <>
            {/* <div className='relative pt-16 pb-16 breadcrumb-section bg-img-c' style={{ backgroundImage: "url(" + p2_s1_img1 + ")" }}>


                <div className='max-w-full mx-auto p-20 ' >
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol role="list" className="flex items-center space-x-4">
                            <li>
                                <div>
                                    <a href="#" className="text-gray-400 hover:text-gray-500">
                                        <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                        <span className="sr-only">Home</span>
                                    </a>
                                </div>
                            </li>
                            {pages.map((page) => (
                                <li key={page.name}>
                                    <div className="flex items-center">
                                        <svg
                                            className="h-5 w-5 flex-shrink-0 text-gray-300"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                        </svg>
                                        <a
                                            href={page.href}
                                            className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                            aria-current={page.current ? 'page' : undefined}
                                        >
                                            {page.name}
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div> */}


            <div className="">
                <div className=" mx-auto max-w-2xl py-16 px-4  sm:py-24 sm:px-6 lg:max-w-full lg:py-0 lg:px-0 ">
                    <div className="relative overflow-hidden lg:min-h-[90vh] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#000000] before:opacity-70 before:z-30 before:bg-blend-luminosity">
                        <div className="absolute inset-0">
                            <img
                                src={p2_s1_img1}
                                alt=""
                                className="h-full w-full object-center object-fill"
                            />

                        </div>
                        <div className='absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' >
                            <nav className="flex" aria-label="Breadcrumb">
                                <ol role="list" className="flex items-center space-x-4">
                                    <li>
                                        <div>
                                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                                <HomeIcon className="h-8 w-8 flex-shrink-0" aria-hidden="true" />
                                                <span className="sr-only">Home</span>
                                            </a>
                                        </div>
                                    </li>
                                    {pages.map((page) => (
                                        <li key={page.name}>
                                            <div className="flex items-center">
                                                <svg
                                                    className="h-8 w-8 flex-shrink-0 text-gray-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                                </svg>
                                                <a
                                                    href={page.href}
                                                    className="ml-4 text-xl font-bold text-white hover:text-gray-100"
                                                    aria-current={page.current ? 'page' : undefined}
                                                >
                                                    {page.name}
                                                </a>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default SectionOne;