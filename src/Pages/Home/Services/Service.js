import React from 'react';

const Service = ({ data }) => {
    const { name, icon, description } = data;
    return (
        <div>
            <div className="card w-96 shadow-2xl p-7 ">
                <figure>
                    <img src={icon} alt="car!" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title text-center mx-auto">{name}</h2>
                    <p className='text-center'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;