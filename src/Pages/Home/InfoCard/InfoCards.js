import React from 'react';
import BannerCard from './BannerCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'



const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            icon: phone,
            description: '+000 123 456789',
            bgClass: 'bg-gradient-to-r from-primary to-secondary'

        }
    ]
    return (
        <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white'>
            {
                cardData.map(card => <BannerCard
                key={card.id}
                card={card}
                
                ></BannerCard>)
            }
        </div>
    );
};

export default InfoCards;