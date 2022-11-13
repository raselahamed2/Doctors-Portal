import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvalibaleAppointment from '../AvalibaleAppointment/AvalibaleAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvalibaleAppointment
            selectedDate={selectedDate}
            ></AvalibaleAppointment>
        </div>
    );
};

export default Appointment;