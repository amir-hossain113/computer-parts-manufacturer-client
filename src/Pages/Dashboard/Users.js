import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl mb-4 mt-4'>All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Admin/User</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <User key={user._id} user={user} index={index} refetch={refetch}></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;