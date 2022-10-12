import React from 'react';

import p1_s4_img2 from '../../../Images/Page1/Section4/Page1 Section4 Image2.png';
import p1_s4_img3 from '../../../Images/Page1/Section4/Page1 Section4 Image3.png';

const SectionFour = () => {

    const posts = [
        {
            title: 'Pressure Washing',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            imageUrl: p1_s4_img3,
            readingTime: '6 min',
            author: {
                name: 'Roel Aufderehar',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            title: 'Oven Cleaning',
            href: '#',
            category: { name: 'Video', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',
            date: 'Mar 10, 2020',
            datetime: '2020-03-10',
            imageUrl: p1_s4_img2,
            readingTime: '4 min',
            author: {
                name: 'Brenna Goyette',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            title: 'Roof Cleaning',
            href: '#',
            category: { name: 'Case Study', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',
            date: 'Feb 12, 2020',
            datetime: '2020-02-12',
            imageUrl: p1_s4_img3,
            readingTime: '11 min',
            author: {
                name: 'Daniela Metz',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        }
    ]

    return (
        <>
            <div className="bg-[#5093F7]  ">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-5xl mx-auto">
                    {/* Content goes here */}

                    <div className='space-y-6 text-center pt-20 pb-40'>
                        <div className='text-[#FFFFFF] font-semibold text-4xl font-sans '>
                            Our Services at a glance!
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative -top-28 z-30">

                <div className="relative max-w-7xl mx-auto">



                    <div className=" max-w-lg mx-auto grid gap-20 lg:grid-cols-3 lg:max-w-none">
                        {posts.map((post) => (
                            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">

                                <div className="flex-1 bg-[#FFFFFF] p-8 flex flex-col justify-between">
                                    <div className="flex-1">

                                        <a href={post.href} className="block mt-2">
                                            <p className="text-2xl font-bold text-gray-900 text-center">{post.title}</p>

                                            <img className='m-6 w-24 mx-auto' src={post.imageUrl} alt="" />
                                            <a href='#seemore' className='flex justify-center items-center mt-5 text-base text-blue-600 text-center font-semibold mx-8'>Learn More <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                            </svg>
                                            </span></a>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='text-center'>
                        <button className='mt-16 text-white text-base bg-[#5093F7] px-6 py-4 text-center font-semibold '>Our Services</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SectionFour;