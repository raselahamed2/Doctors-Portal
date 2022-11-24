import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Sherade/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imgHostingKey = process.env.REACT_APP_imgbb;

    const navigate = useNavigate()

    const { data: specialtes, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/appointmentSpecitalty')
            const data = await res.json()
            return data;
        }
    })
    
    const handleAddDoctor = data => {
        const image = data.img[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }
                fetch('http://localhost:5000/doctors', {
                    method: 'POST', 
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.success(`${data.name} is added successfully`)
                    navigate('/dashboard/managedoctors')
                })
            }
        })
    }
    
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='h-[480px] mt-9 mb-28'>
                <div className='w-96  rounded-xl'>
                    <h1 className='font-bold text-3xl text-center'>Add a Doctor</h1>
                    <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                            <input type='email' {...register("email", { required: 'Email Address is required' })} className="input input-bordered w-full " placeholder="Your Email" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-full mb-8">
                            <label className="label">
                                <span className="label-text">Specialty</span>
                            </label>
                            <select 
                            {...register('specialty', { required: 'Email Address is required' })}
                            className="select select-bordered w-full max-w-xs">
                                {
                                    specialtes.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                    >{specialty.name}</option>
                                    )
                                }
                            </select>
                            {/* {signUpError && <p>{signUpError}</p>} */}
                        </div>
                        <div className="form-control w-full pb-3">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type='file' {...register("img", { required: 'img is required' })} className="input input-bordered w-full " placeholder="Your Email" />
                            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                        </div>
                        <input className=' btn btn-accent w-full mb-5' type="submit" value='Add Doctor' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;