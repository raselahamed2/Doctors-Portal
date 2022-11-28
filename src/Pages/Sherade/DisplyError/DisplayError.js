import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext)
    const navigete = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => { 
                navigete('/login');
            })
            .catch(e => console.error(e))
    }

    return (
        <div>
            <p className='text-red-500'>Sorry, an unexpected error has occurred.</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <p className='text-3xl'>Plase <button onClick={handleLogOut}>Sign Out</button> and log back in</p>
        </div>
    );
};

export default DisplayError;