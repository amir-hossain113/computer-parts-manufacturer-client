import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
    const [user] = useAuthState(auth);

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

        // fetch('http://localhost:5000/profile', {
        //     method: 'POST',
        //     headers: {
        //         'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(profile)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if(data.success){
        //         toast('Your profile is added successfully');
        //     }
        // })
       
    }

  return (
    <div className="mb-10 px-10 py-10">
      <form onSubmit={handleProfile} className="grid grid-cols-1 gap-3 justify-items-center mt-2 border-2 px-10 py-10 lg:p-20 border-orange-700">
      <h2 className="text-center text-3xl mb-4">My Profile</h2>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            value={user?.displayName}
            name="name"
            disabled
            class="input input-bordered w-full"
          />
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            value={user?.email}
            disabled
            class="input input-bordered w-full"
          />
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Education</span>
          </label>
          <textarea
            type="text"
            name="education"
            placeholder="add your education"
            class="input input-bordered w-full"
            required
          />
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Location (city/district)</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            class="input input-bordered w-full"
            required
          />
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Phone</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Your phone number"
            class="input input-bordered w-full"
            required
          />
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Linkedin Profile Link</span>
          </label>
          <input
            type="text"
            name="linkedinProfile"
            placeholder="Your linkedin profile link"
            class="input input-bordered w-full"
          />
        </div>

        <input
          className="btn btn-success w-full mx-w-xs"
          type="submit"
          value="Add profile"
        />

        <input
          className="btn btn-success w-full mx-w-xs"
          type="submit"
          value="Update Profile"
        />
      </form>
    </div>
  );
};

export default MyProfile;
