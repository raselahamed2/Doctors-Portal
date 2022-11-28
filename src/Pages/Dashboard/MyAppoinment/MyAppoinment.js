import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyAppoinment = () => {

    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
console.log(bookings);
    return (
        <div>
            <h1 className="text-3xl mb-8">My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>data</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.length && bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.pasitont}</td>
                                <td>{booking.treatmant}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                {
                                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                    <button className='btn btn-secondary btn-sm'>Pay</button>
                                    </Link>
                                }
                                {
                                 booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                }
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;