import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Testimonials from './Testimonials';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            country: 'California',
            revie: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people1,
        },
        {
            _id: 2,
            name: 'Jenny Rows',
            country: 'California',
            revie: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people2,
        },
        {
            _id: 3,
            name: 'Sofia Gottardi',
            country: 'California',
            revie: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people3,
        },
    ]

    return (
        <section className='mt-24'>
            <div className='flex justify-between'>
                <div>
                    <h2 className="font-bold text-secondary text-2xl ml-16">Testimonial</h2>
                    <h3 className='font-bold text-3xl ml-16'>What Our Patients Says</h3>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Testimonials
                    key={review._id}
                    review={review}
                    ></Testimonials>)
                }
            </div>
        </section>
    );
};

export default Testimonial;