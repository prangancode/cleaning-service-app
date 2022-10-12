import React from 'react';

import p2_s3_img1 from '../../../Images/Page2/Section3/Page2 Section3 Image1.png';
import p2_s3_img2 from '../../../Images/Page2/Section3/Page2 Section3 Image2.png';
import p2_s3_img3 from '../../../Images/Page2/Section3/Page2 Section3 Image3.png';
import p2_s3_img4 from '../../../Images/Page2/Section3/Page2 Section3 Image4.png';
import p2_s3_img5 from '../../../Images/Page2/Section3/Page2 Section3 Image5.png';
import p2_s3_img6 from '../../../Images/Page2/Section3/Page2 Section3 Image6.png';
import p2_s3_img7 from '../../../Images/Page2/Section3/Page2 Section3 Image7.png';
import p2_s3_img8 from '../../../Images/Page2/Section3/Page2 Section3 Image8.png';
import p2_s3_img9 from '../../../Images/Page2/Section3/Page2 Section3 Image9.png';
import p2_s3_img10 from '../../../Images/Page2/Section3/Page2 Section3 Image10.png';
import p2_s3_img11 from '../../../Images/Page2/Section3/Page2 Section3 Image11.png';
import p2_s3_img12 from '../../../Images/Page2/Section3/Page2 Section3 Image12.png';

const SectionThree = () => {
    const posts = [
        {
            title: 'Pressure Washing',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',

            imageUrl: p2_s3_img1,

        },
        {
            title: 'Pressure Washing',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',

            imageUrl: p2_s3_img2,

        },
        {
            title: 'Pressure Washing',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',

            imageUrl: p2_s3_img3,

        },
        {
            title: 'Pressure Washing',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',

            imageUrl: p2_s3_img4,

        },
        {
            title: 'Pressure Washing',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',

            imageUrl: p2_s3_img5,

        },
        {
            title: 'Pressure Washing',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',

            imageUrl: p2_s3_img6,

        },
        {
            title: 'Pressure Washing',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',

            imageUrl: p2_s3_img7,

        },
        {
            title: 'Pressure Washing',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',

            imageUrl: p2_s3_img8,

        },
        {
            title: 'Pressure Washing',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',

            imageUrl: p2_s3_img9,

        },
        {
            title: 'Pressure Washing',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',

            imageUrl: p2_s3_img10,

        },
        {
            title: 'Pressure Washing',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',

            imageUrl: p2_s3_img11,

        },
        {
            title: 'Pressure Washing',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',

            imageUrl: p2_s3_img12,

        },

    ]

    return (
        <>
            <div className="relative z-30 mb-20">

                <div className="relative max-w-7xl mx-auto">



                    <div className=" max-w-lg mx-auto grid gap-20 lg:grid-cols-3 lg:max-w-none">
                        {posts.map((post) => (
                            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden w-5/6 mx-auto">



                                <img className='' src={post.imageUrl} alt="" />




                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </>
    );
};

export default SectionThree;