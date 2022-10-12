import React from 'react';

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const SectionTwo = () => {
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                    <div className='text-center py-4 mb-12'>
                        <div className='text-[#162A43] font-semibold text-4xl font-sans'>
                            <h1 className='leading-snug'>Book Professional <span className='text-[#1363DF]'> Cleaning Service </span>in Glasgow</h1>
                        </div>


                    </div>
                    <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-3 md:gap-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Phone</h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, repudiandae!
                                </p>
                            </div>
                            <div className="mt-9">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>0647 231 645</p>
                                        <p className="mt-1">Mon-Fri 8am to 6pm BST</p>
                                    </div>
                                </div>
                                {/* <div className="mt-6 flex">
                                    <div className="flex-shrink-0">
                                        <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>support@example.com</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 md:mt-0">
                            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Email</h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, nulla.
                                </p>
                            </div>
                            <div className="mt-9">
                                {/* <div className="flex">
                                    <div className="flex-shrink-0">
                                        <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>+1 (555) 123 4567</p>
                                        <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                                    </div>
                                </div> */}
                                <div className="mt-6 flex">
                                    <div className="flex-shrink-0">
                                        <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>info@Novannacleaningservices.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 md:mt-0">
                            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Location</h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, illo.
                                </p>
                            </div>
                            <div className="mt-9">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <MapPinIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>Glasgow, Scotland.</p>
                                        <p className="mt-1">Mon-Fri 8am to 6pm BST</p>
                                    </div>
                                </div>
                                {/* <div className="mt-6 flex">
                                    <div className="flex-shrink-0">
                                        <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>support@example.com</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionTwo;