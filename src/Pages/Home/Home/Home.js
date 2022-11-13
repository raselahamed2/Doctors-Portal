import React from 'react';
import Banner from '../Banner/Banner';
import ChekForm from '../ChekForm/ChekForm/ChekForm';
import Dentals from '../Dental/Dentals';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Dentals></Dentals>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ChekForm></ChekForm>
        </div>
    );
};

export default Home;