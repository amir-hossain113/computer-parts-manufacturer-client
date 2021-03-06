import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || googleUser);

    const navigate = useNavigate();

    let signUpError;

    if(loading || googleLoading || updating){
        return <Loading></Loading>
    }

    if(error || googleError || updateError){
        signUpError = <p className='text-red-600'><small>{error?.message || googleError?.message || updateError?.message}</small></p>
    }

    // if(user || googleUser){
    //     console.log(user || googleUser);
    // }

    if(token){
        navigate('/')
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name});
        navigate('/');
    }



    return (
        <div className='flex h-screen justify-center items-center bg-slate-400'>
            <div className="card w-96 shadow-xl bg-purple-200"> 
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-accent">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide a valid email'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Your Password" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 7,
                                        message: 'Password must be 7 character or longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                            {signUpError}
                        <input className='btn btn-success w-full mx-w-xs' type="submit" value="sign up" />
                    </form>
                    <p><small>Already have an Account? <Link className='text-orange-500' to="/login">Please Login</Link></small></p>
                    <div className="divider"><span className=' border-2 border-dashed border-accent rounded-xl p-2'>OR</span></div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;