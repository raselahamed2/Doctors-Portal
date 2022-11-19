import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmantOption from './AppointmantOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvalibaleAppointment = ({selectedDate}) => {
    const [treatmant, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')

    const {data : appointmentOption = [], refetch} = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/appointmentOption?date=${date}`)
            const data = await res.json()
            return data
        }
    })

    // useEffect( () =>{
    //     fetch('http://localhost:5000/appointmentOption')
    //     .then(res => res.json())
    //     .then(data => setDrAppointment(data))
    // }, [])
    return (
        <div>
            <p className='text-secondary text-center text-bold text-xl'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    appointmentOption.map(option => <AppointmantOption
                    key={option._id}
                    AppointmantOption={option}
                    setTreatment={setTreatment}
                    refetch={refetch}
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