import React from 'react';

const Testimonials = ({ review }) => {
    const { name, country, revie, image } = review;
    return (
        <div className="card w-96 shadow-xl">
            <div className="card-body">
                <p>{revie}</p>
            </div>
            <div className='flex justify-between m-5'>
            <figure>
                <img className='' src={image} alt="Shoes" />
            </figure>
            <div className='mr-20 mt-6'>
                <h2 className="card-title">{name}</h2>
                <h2>{country}</h2>
            </div>
            </div>
        </div>
    );
};

export default Testimonials;