import React from 'react';
import { toast } from 'react-toastify';

const User = ({user, index, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'Put',
            headers: {
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                // 'content-type' : 'application/json'
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('failed to make an admin');
            }
            return  res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                refetch()
                toast.success('Successfully made an admin')
            }
           
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role === 'admin'? 'Admin' : <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default User;