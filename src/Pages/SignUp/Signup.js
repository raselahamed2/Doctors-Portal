import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser} = useContext(AuthContext)

    const handleSignup = (data) =>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='h-[480px] flex justify-center items-center mt-60 mb-28'>
            <div className='w-96  rounded-xl'>
            <h1 className='font-bold text-3xl my-9 text-center'>Sign Up</h1>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full pb-3">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type='text' {...register("name")} className="input input-bordered w-full " placeholder="Your Name" />
                </div>
                <div className="form-control w-full pb-3">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email' {...register("email", {required: 'Email Address is required'})} className="input input-bordered w-full " placeholder="Your Email" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full mb-8">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password' {...register("password",  
                    {required: 'password is required',
                    minLength: {value: 6, message : 'password min 6 chereactars'}
                    })} className="input input-bordered w-full" placeholder="Your Password" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    <label className="label ml-2 mt-3">
                        <span className="label-text">Forgot Password ?</span>
                    </label>
                </div>
                <input className=' btn btn-accent w-full mb-5' type="submit" value='Sign Up' />
                <h1 className='ml-6 mb-4'> Doctors Portal? <Link className='text-primary' to='/login'>Login your account</Link></h1>
                <div className="divider">OR</div>
                <button className='my-7 w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>
            </form>
            </div>
        </div>
    );
};

export default Signup;