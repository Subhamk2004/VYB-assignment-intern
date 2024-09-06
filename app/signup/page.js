'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const signUp = z.object({
    username: z.string().min(1, 'Full Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    number: z.string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(10, 'Phone number must be exactly 10 digits')
        .regex(/^\d+$/, 'Phone number must be a valid number'),
});

function Signup() {
    const [isCreator, setIsCreator] = useState(true);
    const router = useRouter();


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signUp),
    });

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        router.push('/')
    };


    return (
        <div className='mt-10 h-screen flex flex-row items-center gap-20 w-4/5 max-w-[1100px] justify-around'>
            <img src='/assets/images/authScreen.png'
                className='w-[40%] min-w-[300px] rounded-lg'
            />
            <form className=' w-3/5 flex flex-col items-center gap-5 border border-black p-4 rounded-2xl'
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className='text-3xl font-bold'>SignUp</h2>
                <div className=' flex flex-col w-full'>
                    <label htmlFor='username' className='text-xl font-semibold mt-4'>
                        Full Name
                    </label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        className='outline-none p-2 border w-full mt-1 border-black rounded-xl'
                        placeholder='Enter your Full name'
                        {...register('username')}
                    />
                    {errors.username && <p className='text-red-500'>{errors.username.message}</p>}

                    <label htmlFor='email' className='text-xl font-semibold mt-4'>
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

                    <label htmlFor='password' className='text-xl font-semibold mt-4'>
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



                    {
                        isCreator ?
                            <div className='w-full flex flex-col items-center mt-4'>
                                <h3 className='text-xl font-semibold mt-4'>
                                    Are you a creator?
                                </h3>
                                <div className='w-full flex flex-row justify-center gap-4 mt-2'>

                                    <Link href='/verifyCreator' className='p-2 font-bold rounded-lg border border-black px-5'>Yes</Link>
                                    <button className='p-2 font-bold rounded-lg border border-black px-5'
                                        onClick={() => {
                                            setIsCreator(!isCreator)
                                        }}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>

                            :
                            <button href='/' className='text-[#003c3c] p-2 px-8 border border-[#003c3c] rounded-lg mt-5'
                                type='submit'
                                onClick={onSubmit}
                            >Sign up</button>
                    }

                    <div className='mt-5 w-full flex justify-center'>
                        <p>Already A user? <Link href='/login' className='font-semibold text-[#003c3c]'>Login</Link></p>
                    </div>

                </div>
            </form>
        </div >
    )
}

export default Signup