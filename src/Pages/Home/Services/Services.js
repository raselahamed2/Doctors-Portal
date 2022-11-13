import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import flouride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const cardData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: flouride,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            icon: whitening,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            bgClass: 'bg-gradient-to-r from-primary to-secondary'

        }
    ]

    return (
        <div className='mt-32'>
            <h2 className='font-bold text-primary text-center text-3xl'>OUR SERVICES</h2>
            <h3 className="font-bold text-center my-2 text-5xl">Services We Provide</h3>
            <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    cardData.map(data => <Service
                    key={data.id}
                    data ={data}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;