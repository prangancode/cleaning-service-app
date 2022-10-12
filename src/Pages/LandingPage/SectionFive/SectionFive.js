import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

import p1_s5_img1 from '../../../Images/Page1/Section5/Page1 Section5 Image1.png';

const SectionFive = () => {



    const reviews = [
        {
            id: 1,
            rating: 5,
            content: `
          <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
        `,
            date: 'July 16, 2021',
            datetime: '2021-07-16',
            author: 'Emily Selman',
            avatarSrc:
                'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },

    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <div className="">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-7xl mx-auto">
                    {/* Content goes here */}
                    {/* <div className='grid grid-cols-2 gap-x-12' >



                        <div className='col-span-1 relative'>
                            <div>
                                <img className='mt-8' src={p1_s5_img1} alt="" />
                            </div>
                        </div>

                        <div className='space-y-8 py-10 col-span-1 mt-4 '>
                            <div className='text-[#162A43] text-4xl font-semibold font-sans'>
                                Our Customers Love <br />
                                <span className='text-[#5093F7]'>Our Work</span>
                            </div>
                            <p className='text-[#5093F7] font-normal text-lg text-justify'>
                                Herddle’s platform tracks maintenance, compliance, financials and performance to get full visibility of your portfolio. One monthly fee – no excessive lump sum. costs Controlled maintenance costs from quotes tendered by multiple contractors
                            </p>


                        </div>



                    </div> */}



                    <div className="bg-white lg:py-4">
                        <div className=" pb-16 lg:relative lg:z-10 lg:pb-0">
                            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-8 lg:px-8">
                                <div className="relative lg:-my-8">
                                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
                                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                                        <div className="aspect-w-10 aspect-h-6 overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                            <img
                                                className=""
                                                src={p1_s5_img1}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 lg:col-span-1 lg:m-0 lg:pl-8">
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-4">
                                        <blockquote>
                                            <div>
                                                <div className='text-[#162A43] text-4xl font-semibold font-sans mb-8'>
                                                    Our Customers Love <br />
                                                    <span className='text-[#5093F7] mt-2'>Our Work</span>
                                                </div>
                                                <svg
                                                    className="h-12 w-12 text-white opacity-25 fill-blue-500"

                                                    viewBox="0 0 32 32"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                                </svg>
                                                <p className="mt-6 text-2xl font-medium text-gray-700">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet
                                                    feugiat est integer dolor auctor adipiscing nunc urna, sit.
                                                </p>
                                            </div>
                                            <footer className="mt-6">
                                                <p className="text-xl font-semibold">Andrew McIntyre</p>
                                                <p className="text-base font-medium text-gray-700">Glasgow, Scotland</p>
                                            </footer>


                                            <div className="">
                                                {reviews.map((review, reviewIdx) => (
                                                    <div key={review.id} className="flex space-x-4 text-sm text-gray-500">




                                                        <div className="mt-4 flex items-center">
                                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                                <StarIcon
                                                                    key={rating}
                                                                    className={classNames(
                                                                        review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                                        'h-5 w-5 flex-shrink-0'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ))}
                                                        </div>
                                                        <p className="sr-only">{review.rating} out of 5 stars</p>



                                                    </div>
                                                ))}
                                            </div>

                                        </blockquote>


                                    </div>
                                    <div className=' text-right'>
                                        <span className="isolate inline-flex rounded-md shadow-sm">
                                            <button
                                                type="button"
                                                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                            >
                                                <span className="sr-only">Previous</span>
                                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                            <button
                                                type="button"
                                                className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                            >
                                                <span className="sr-only">Next</span>
                                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>


            </div>
        </>
    );
};

export default SectionFive;