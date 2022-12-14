import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const [loginUseEmail, setLoginUseEmail] = useState('')
    const [token] = useToken(loginUseEmail)
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

    if(token) {
        navigate(from, {replace: true})
    }

    const handleLogin = data => {
        console.log('data');
        setLoginError('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user 
            console.log(user);
            setLoginUseEmail(data.email);
        })
        .catch(e => {
            console.error(e.message)
            setLoginError(e.message)
        })
    }

    return (
        // <div className='h-[480px] flex justify-center items-center mt-60 mb-28'>
        //     <div className='w-96  rounded-xl'>
        //     <h1 className='font-bold text-3xl my-9 text-center'>Login</h1>
        //     <form onSubmit={handleSubmit(handleLogin)}>
        //         <div className="form-control w-full pb-3">
        //             <label className="label">
        //                 <span className="label-text">Email</span>
        //             </label>
        //             <input type='email' {...register("email", {required: 'Email Address is required'})} className="input input-bordered w-full " placeholder="Your Email" />
        //             {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        //         </div>
        //         <div className="form-control w-full mb-8">
        //             <label className="label">
        //                 <span className="label-text">Password</span>
        //             </label>
        //             <input type='password' {...register("password",  
        //             {required: 'password is required',
        //             minLength: {value: 6, message : 'password min 6 chereactars'},
        //             pattern: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/, message : 'password not be strong'
        //             })} className="input input-bordered w-full" placeholder="Your Password" />
                    
        //             <label className="label ml-2 mt-3">
        //                 <span className="label-text">Forgot Password ?</span>
        //             </label>
        //             {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
        //         {loginError && <p className='text-red-500'>{loginError}</p>}
        //         </div>
        //         <input className=' btn btn-accent w-full mb-5' type="submit" value='Login' />
        //         <h1 className='ml-6 mb-4'>New to Doctors Portal? <Link className='text-primary' to='/signup'>Create new account</Link></h1>
        //         <div className="divider">OR</div>
        //         <button className='my-7 w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>
        //     </form>
        //     </div>
        // </div>
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;