import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState(user?.email);
    const [profiles, setProfiles] = useState({});

    useEffect(() => {
      fetch(`http://localhost:5000/user/${email}`, {
        method: 'GET',
        headers: {
          'content-type' : 'application/json',
          // 'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        setProfiles(data);
      })
    }, [profiles])
    

    const handleProfile = event => {
        event.preventDefault();

        const profile = {
            userName: user.displayName,
            email: user.email,
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkedinProfile: event.target.linkedinProfile.value
        }
        console.log(profile)

        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(profile)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                toast.success('Your profile is updated successfully');
            }
            else{
              toast.error('Your profile failed to update');
            }
        })       
    }

  return (
    <div className="px-20 py-10">
       <h2 className="text-center text-3xl mb-4">My Profile</h2>
       <div className="lg:flex gap-5 justify-center items-center w-full my-10 border-2 border-dashed border-green-900 p-20">
         <div className="w-56">
           <img src={user.photoURL} className="w-48 rounded-lg" alt="google-accounts-img" />
         </div>
         <div>
           <h2>{user.displayName}</h2>
           <p>{user.email}</p>
           <p>{profiles?.education}</p>
           <p>{profiles?.location}</p>
           <p>{profiles?.phone}</p>
           <p>{profiles?.linkedinProfile}</p>
         </div>
       </div>
      <form onSubmit={handleProfile} className="mt-2 border-2 px-10 py-10 lg:px-20 border-orange-700">
      <h2 className="text-center text-3xl mb-4">Update Profile</h2>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            value={user?.displayName}
            name="name"
            disabled
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            value={user?.email}
            disabled
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Education</span>
          </label>
          <textarea
            type="text"
            name="education"
            placeholder="add your education"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Location (city/district)</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Your phone number"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Linkedin Profile Link</span>
          </label>
          <input
            type="text"
            name="linkedinProfile"
            placeholder="Your linkedin profile link"
            className="input input-bordered w-full"
          />
        </div>

        <input
          className="btn btn-primary w-full mx-w-xs mt-4"
          type="submit"
          value="Update Profile"
        />
      </form>
    </div>
  );
};

export default MyProfile;
