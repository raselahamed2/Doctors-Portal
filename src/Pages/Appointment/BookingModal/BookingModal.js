import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatmant, selectedDate, setTreatment }) => {
    const { name, slots } = treatmant;
    const data = format(selectedDate, 'PP')

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        console.log(data, slot, name, email, phone);

        const booking = {
            appointmentDate: data,
            treatmant: name,
            name, 
            slot,
            email,
            phone
        }
        console.log(booking);
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='mt-12 grid grid-cols-1'>
                        <input value={data} className="input w-full mb-6 bg-gray-200" />
                        <select name='slot' className="select select-bordered w-full mb-6">
                            
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full mb-6" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mb-6" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full mb-6" />
                        <input className='btn btn-accent w-full' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;