import React from 'react';

const AppointmantOption = ({ AppointmantOption, setTreatment }) => {
    const { name, price ,  slots } = AppointmantOption
    return (
        <div>
            <div className="card w-96 h-72 bg-base-100 shadow-xl">
                <div className="card-body text-center mx-auto">
                    <h2 className="card-title text-secondary pt-8 mb-2 text-2xl text-center font-bold">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try anothre day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} avalibale</p>
                    <p><small>Price: ${price}</small></p>
                    <div className="card-actions justify-center pb-10">
                        <label 
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(AppointmantOption)} htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary mt-4 text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmantOption;