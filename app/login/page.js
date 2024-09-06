'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const login = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

function Login() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(login),
    });

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        router.push('/');
    };


    return (
        <div className='mt-10 h-screen flex flex-row items-center gap-20 w-4/5 max-w-[1100px] justify-around'>
            <img src='/assets/images/authScreen.png'
                className='w-[40%] min-w-[300px] rounded-lg'
            />
            <form className=' w-3/5 flex flex-col items-center gap-5  border border-black p-4 rounded-2xl'
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className='text-3xl font-bold'>Login</h2>
                <img src='/assets/images/google.png'/>
                <img src='/assets/images/or.png'/>
                <div className=' flex flex-col w-full'>

                    <label htmlFor='email' className='text-2xl font-bold mt-4'>
                        Email
                    </label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        className='outline-none p-2 border w-full mt-1 border-black rounded-xl'
                        placeholder='Enter your Email'
                        {...register('email')}
                    />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label htmlFor='password' className='text-2xl font-bold mt-4'>
                        Password
                    </label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        className='outline-none p-2 border w-full mt-1 border-black rounded-xl'
                        placeholder='Enter your password'
                        {...register('password')}
                    />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}


                    <div className='mt-5 w-full flex flex-col justify-center items-center'>
                        <button href='/' className='p-3 px-8 border border-[#003c3c] rounded-2xl text-xl font-bold text-[#003c3c]'
                            type='submit'
                        >
                            Login
                        </button>

                        <p className='mt-4'>Dont't have an account?</p>

                        <Link href='/signup' className=' mt-3 p-2 px-8 border border-[#003c3c] bg-[#003c3c] rounded-2xl text-xl font-bold text-white'>Sign up</Link>
                    </div>


                </div>
            </form>
        </div >
    )
}

export default Login