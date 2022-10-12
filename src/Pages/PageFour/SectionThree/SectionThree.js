import React from 'react';

const faqs = [
    {
        id: 1,
        question: "Do I have to sign a contract?",
        answer:
            "No you do not need to signup any contract if you are looking to clean your house or for any domestic cleaning services you opt in. We do generate contract for long term commercial cleaning services on a larger scale.",
    },
    {
        id: 2,
        question: "Will I always have the same house cleaner?",
        answer:
            "Yes you will have the same house cleaners for every cleaning service you opt in on a weekly basis.",
    },
    {
        id: 3,
        question: "Do you Guarantee your work?",
        answer:
            "Yes we do offer 100% job satisfaction for every customer we offer cleaning service.",
    },
    {
        id: 4,
        question: "How can I make the payment?",
        answer:
            "You can make the payment using a wire transfer to our companies bank account.",
    },
    {
        id: 5,
        question: "Can I book professional cleaners for a month?",
        answer:
            "Yes you can book our professional cleaners for a month.",
    },
    {
        id: 6,
        question: "Does house cleaning include laundry?",
        answer:
            "Yes we do offer laundry services as well, subject to our terms and conditions.",
    },
    // More questions...
]

const SectionThree = () => {
    return (
        <>
            <div className="bg-indigo-700">
                <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white">Frequently asked questions</h2>
                    <div className="mt-6 border-t border-indigo-300 border-opacity-25 pt-10">
                        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
                            {faqs.map((faq) => (
                                <div key={faq.id}>
                                    <dt className="text-lg font-medium leading-6 text-white">{faq.question}</dt>
                                    <dd className="mt-2 text-base text-indigo-200">{faq.answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionThree;