import React from 'react';
import { format } from 'date-fns';

const AvalibaleAppointment = ({selectedDate}) => {
    return (
        <div>
            
            <p className='text-secondary text-center text-bold text-xl'>Available Appointments on {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AvalibaleAppointment;