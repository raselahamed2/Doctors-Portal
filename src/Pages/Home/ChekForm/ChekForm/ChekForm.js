import React from 'react';
import appointment from '../../../../assets/images/appointment.png'

const ChekForm = () => {
    return (
        <div style={{ backgroundImage: `url(${appointment})` }} className=' mt-36 text-center p-28'>
            <h2 className='text-bold text-secondary text-2xl'>Contact Us</h2>
            <h3 className='text-bold text-2xl mb-10 text-white'>Stay connected with us</h3>
            <div className=''>
            <input type="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xl" />
            <br />
            <input type="subjuct" placeholder="Subjuct" className="input input-bordered input-primary w-full max-w-xl mt-4" />
            <br />
            <input type="text" className="input input-bordered input-lg h-44 w-full max-w-xl mt-5" />
            </div>
            <button className="btn btn-active btn-secondary text-white mt-8 px-10">Submit</button>
        </div>
    );
};

export default ChekForm;