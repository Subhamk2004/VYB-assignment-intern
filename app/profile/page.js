'use client'
import React, { useState, useEffect } from 'react';
import ProfileNav from '@/components/ProfileNav';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const profileSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  number: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(10, 'Phone number must be exactly 10 digits')
    .regex(/^\d+$/, 'Phone number must be a valid number'),
});

export default function ProfilePage() {
  const [showProfileNav, setShowProfileNav] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowProfileNav(window.innerWidth > 640);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div className='mt-24 w-4/5 h-auto flex flex-row items-center justify-center gap-5'>
      {showProfileNav && <ProfileNav />}
      <form
        className='border w-full max-w-[750px] border-black rounded-2xl p-4 flex flex-col'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='text-3xl font-bold'>Profile</h1>
        <label htmlFor='username' className='text-xl font-semibold mt-4'>
          Username
        </label>
        <input
          type='text'
          name='username'
          id='username'
          className='outline-none p-2 border w-full mt-1 border-black rounded-xl'
          placeholder='Enter your Username'
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
        <div className='text-[#003c3c] font-bold w-full flex justify-end'>
          <button>Reset your password?</button>
        </div>
        <label htmlFor='number' className='text-xl font-semibold mt-4'>
          Phone Number
        </label>
        <input
          type='text'
          name='number'
          id='number'
          className='outline-none p-2 border w-full mt-1 border-black rounded-xl'
          placeholder='Enter your Phone number'
          {...register('number')}
        />
        {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
        <button
          type='submit'
          className='p-2 mt-2 w-44 flex justify-center border rounded-xl font-bold text-white bg-[#003c3c]'
        >
          Save
        </button>
      </form>
    </div>
  );
}