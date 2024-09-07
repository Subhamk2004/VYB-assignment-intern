'use client'

import React, { useState, useEffect } from 'react';
import ProfileNav from '@/components/ProfileNav';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const AddressSchema = z.object({
    address: z.string().min(1, 'Address line 1 is required'),
    email: z.string().email('Invalid email address'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    country: z.string().min(1, 'Country is required'),
    pincode: z.string()
        .min(6, 'Pin code must be 6 digits')
        .max(6, 'Phone number must be 6 digits')
        .regex(/^\d+$/, 'Pin code must be a valid'),
});

export default function Address() {
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
        resolver: zodResolver(AddressSchema),
    });

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };

    return (
        <div className='mt-24 w-4/5 h-auto flex flex-row items-center justify-center gap-5'>
            {showProfileNav && <ProfileNav />}
            <form
                className='border w-full sm:min-w-[500px] max-w-[750px] border-black rounded-2xl p-4 flex flex-col'
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className='text-3xl font-bold'>Address</h1>

                <label htmlFor='address' className='text-xl font-semibold mt-4'>
                    Address Line 1
                </label>
                <input
                    type='text'
                    name='address'
                    id='address'
                    className='outline-none p-2 border w-full mt-1 border-black rounded-xl'
                    placeholder='Enter your Address'
                    {...register('address')}
                />
                {errors.address && <p className='text-red-500'>{errors.address.message}</p>}

                <label htmlFor='lin2' className='text-xl font-semibold mt-4'>
                    Address Line 2
                </label>
                <input
                    type='text'
                    name='line2'
                    id='lin2'
                    className='outline-none p-2 border w-full mt-1 border-black rounded-xl'
                    placeholder='Enter address line 2'
                />

                <div className='flex flex-col sm:flex-row gap-5 w-full'>

                    <label htmlFor='pincode' className='text-xl flex flex-col font-semibold mt-4'>
                        Zip Code
                        <input
                            type='number'
                            name='pincode'
                            id='pincode'
                            className='outline-none p-2 border w-full mt-1 border-black rounded-xl  font-normal text-lg'
                            placeholder='Enter your pincode'
                            {...register('pincode')}
                        />
                        {errors.pincode && <p className='text-red-500  font-normal text-lg'>{errors.pincode.message}</p>}
                    </label>

                    <label htmlFor='city' className='text-xl font-semibold sm:mt-4 flex flex-col '>
                        City
                        <input
                            type='text'
                            name='city'
                            id='city'
                            className='outline-none p-2 border w-full mt-1 border-black rounded-xl text-normal font-normal text-lg'
                            placeholder='Enter your city'
                            {...register('city')}
                        />
                        {errors.city && <p className='text-red-500  font-normal text-lg'>{errors.city.message}</p>}
                    </label>

                </div>

                <div className='flex flex-col sm:flex-row gap-5 w-full'>

                    <label htmlFor='state' className='text-xl font-semibold mt-4 flex flex-col '>
                        State
                        <input
                            type='text'
                            name='state'
                            id='state'
                            className='outline-none p-2 border w-full mt-1 border-black rounded-xl  font-normal text-lg'
                            placeholder='Enter your state'
                            {...register('state')}
                        />
                        {errors.state && <p className='text-red-500  font-normal text-lg'>{errors.state.message}</p>}
                    </label>

                    <label htmlFor='country' className='text-xl font-semibold sm:mt-4 flex flex-col '>
                        Country
                        <input
                            type='text'
                            name='country'
                            id='country'
                            className='outline-none p-2 border w-full mt-1 border-black rounded-xl text-normal font-normal text-lg'
                            placeholder='Enter your country'
                            {...register('country')}
                        />
                        {errors.country && <p className='text-red-500 font-normal text-lg'>{errors.country.message}</p>}
                    </label>

                </div>

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
