import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmetionModal from '../../../Sherade/confirmetionModal/ConfirmetionModal';
import Loading from '../../../Sherade/Loading/Loading';

const ManageDoctors = () => {
    const  [deteletDoctor, setDeleteDoctor] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json()
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const closeModal = () =>{
        setDeleteDoctor(null)
    }

    const handleDeleteDoctor = doctor =>{
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch()
                toast.success(`doctor ${doctor.name} deleted successfully`)
            }
            console.log(data);
        })
    }

    return (
        <div>
            <h1 className="text-3xl mb-5">Manage Doctors: {doctors?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.length && doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor.image} alt="avatar" />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deteletDoctor && <ConfirmetionModal
                title={`Are you sure want to delete`}
                message={`If you delete ${deteletDoctor.name} it cannot be undone`}
                successAction = {handleDeleteDoctor}
                modalData = {deteletDoctor}
                successButtonName = "Delete"
                closeModal={closeModal}
                >
                </ConfirmetionModal>
            }
        </div>
    );
};

export default ManageDoctors;