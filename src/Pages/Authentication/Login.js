import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || googleUser);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if(token){
                navigate(from, { replace: true });
            }
    }, [token, from, navigate]);


    let loginError;

    if(loading || googleLoading){
        return <Loading></Loading>
    }

    if(error || googleError){
        loginError = <p className='text-red-600'><small>{error?.message || googleError?.message}</small></p>
    }

    // if(user || googleUser){
    //     navigate(from, { replace: true });
    // }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    
    return (
        <div className='flex h-screen justify-center items-center bg-slate-400'>
            <div class="card w-96  shadow-xl bg-purple-200"> 
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold text-accent">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                class="input input-bordered w-full max-w-xs" 
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
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Your Password" 
                                class="input input-bordered w-full max-w-xs" 
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
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                            {loginError}
                        <input className='btn btn-success w-full mx-w-xs' type="submit" value="Login" />
                    </form>
                    <p><small>New to Computer Parts Manufacturer? <Link className='text-orange-500' to="/signup">Create New Account</Link></small></p>
                    <div class="divider"><span className=' border-2 border-dashed border-accent rounded-xl p-2'>OR</span></div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-primary">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;