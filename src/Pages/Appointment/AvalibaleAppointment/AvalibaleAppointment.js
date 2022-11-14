import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmantOption from './AppointmantOption';
import BookingModal from '../BookingModal/BookingModal';

const AvalibaleAppointment = ({selectedDate}) => {
    const [drAppointment, setDrAppointment] = useState([])
    const [treatmant, setTreatment] = useState(null)

    useEffect( () =>{
        fetch('drAppointment.json')
        .then(res => res.json())
        .then(data => setDrAppointment(data))
    }, [])
    return (
        <div>
            <p className='text-secondary text-center text-bold text-xl'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    drAppointment.map(option => <AppointmantOption
                    key={option._id}
                    AppointmantOption={option}
                    setTreatment={setTreatment}
                    ></AppointmantOption>)
                }
            </div>
            {
             treatmant &&   
                <BookingModal
                treatmant={treatmant}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvalibaleAppointment;