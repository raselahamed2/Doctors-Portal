import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[480px] flex justify-center items-center mt-60 mb-28'>
            <div className='w-96  rounded-xl'>
            <h1 className='font-bold text-3xl my-9 text-center'>Login</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full pb-3">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email' {...register("email")} className="input input-bordered w-full " placeholder="Your Email" />
                </div>
                <div className="form-control w-full mb-8">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password' {...register("password")} className="input input-bordered w-full" placeholder="Your Password" />
                    <label className="label ml-2 mt-3">
                        <span className="label-text">Forgot Password ?</span>
                    </label>
                </div>
                <input className=' btn btn-accent w-full mb-5' type="submit" value='Login' />
                <h1 className='ml-6 mb-4'>New to Doctors Portal? <Link className='text-primary' to='/signup'>Create new account</Link></h1>
                <div className="divider">OR</div>
                <button className='my-7 w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>
            </form>
            </div>
        </div>
    );
};

export default Login;