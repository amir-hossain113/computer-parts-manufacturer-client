import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Contact = () => {
    const [user] = useAuthState(auth);
    const handleContact = event => {
        event.preventDefault();

        const contact = {
            name: user.displayName,
            email: user.email,
            phone: event.target.phone.value,
            message: event.target.message.value
        }

        fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(contact)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                toast.success('Your message send successfully');
            }
            else{
                toast.error('Sorry your message does not send!!')
            }
        })
    }

    return (
           <div className='w-full lg:px-40 px-10 py-20 mx-auto'>
               <h2 className='text-center text-2xl text-amber-400 mb-10 font-bold'>Contact Us</h2>
                <form  onSubmit={handleContact} className='grid grid-cols-1 gap-3 justify-items-center mt-2 border-2 border-dotted px-10 py-10 lg:p-20 border-green-500'>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                                value={user?.displayName} 
                                name="name"
                                disabled
                                className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                value={user?.email} 
                                disabled
                                className="input input-bordered w-full"  />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input 
                                type="text" 
                                name="phone"
                                placeholder='Your Phone Number' 
                                className="input input-bordered w-full" 
                                required 
                            />
                           
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea 
                                type="text" 
                                name="message"
                                placeholder='Your Message'
                                className="input input-bordered w-full" 
                                required
                            />
                           
                        </div>

                        <input
                            className="btn btn-warning w-full mx-w-xs"
                            type="submit"
                            value="Submit"
                        />
                            
                </form>
            </div>
    );
};

export default Contact;