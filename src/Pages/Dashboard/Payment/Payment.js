import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Sherade/Loading/Loading';
import ChekOutForm from './ChekOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    console.log(booking);
    const { treatmant, appointmentDate, slot, price } = booking
    return (
        <div>
            <h2 className="text-3xl">Payment for {treatmant}</h2>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment {appointmentDate} at {slot}</p>
            <div className="my-12 w-96">
                <Elements stripe={stripePromise}>
                 <ChekOutForm 
                 booking={booking}
                 />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;