'use client'

import React, { useState } from 'react';
import ProfileNav from '@/components/ProfileNav';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const storeSchema = z.object({
    username: z.string().min(1, 'Username is required'),
    email: z.string().email('Invalid email address'),
    cardNumber: z.string()
        .min(1, 'Card number can not be empty')
        .regex(/^\d+$/, 'Card number must be a valid number'),
    panNumber: z.string().min(1, 'Pan number must not be empty'),
    gstNumber: z.string()
        .min(1, 'GST number must not be empty')
        .regex(/^\d+$/, 'GST number must be a valid number'),
});

export default function UerStore() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(storeSchema),
    });

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };

    const [gst, setGst] = useState(true);

    return (
        <div className='mt-24 w-4/5 h-auto flex flex-row justify-center gap-5'>
            <ProfileNav />
            <form
                className='border w-full max-w-[750px] border-black rounded-2xl p-4 flex flex-col'
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className='text-3xl font-bold'>Creator Store</h1>

                <img src='/assets/images/storeLogo.png'
                    className='max-w-80 -ml-3'
                />
                <img src='/assets/images/changeStorePic.png'
                    className='w-40'
                />

                <h2 className='text-2xl font-bold mt-4'>Link Social Media Account</h2>
                <img src='/assets/images/socials.png'
                    className='w-72'
                />
                <label htmlFor='storeUrl' className='text-xl font-semibold mt-4'>
                    Claim your store URL
                </label>
                <input
                    type='text'
                    name='storeUrl'
                    id='storeUrl'
                    className='outline-none p-2 border w-full mt-1 border-black rounded-xl'
                    placeholder='Username for store'
                    {...register('username')}
                />
                {errors.username && <p className='text-red-500'>{errors.username.message}</p>}

                <label className='text-xl font-semibold mt-4'>Select your Genre</label>
                <select htmlFor='email' className='outline-none p-2 border w-full mt-1 border-black rounded-xl'>
                    <option className='outline-none p-2 border w-full mt-1 border-black rounded-xl'>
                        Enter Your Genre
                    </option>
                </select>



                <label htmlFor='bank' className='text-xl font-semibold mt-4'>
                    Add your bank details
                </label>
                <input
                    type='password'
                    name='bank'
                    id='bank'
                    className='outline-none p-2 border w-full mt-1 border-black rounded-xl'
                    placeholder='***********'
                    {...register('cardNumber')}
                />
                {errors.cardNumber && <p className='text-red-500'>{errors.cardNumber.message}</p>}


                <label htmlFor='pan' className='text-xl font-semibold mt-4'>
                    Enter your PAN Number
                </label>
                <input
                    type='text'
                    name='pan'
                    id='pan'
                    className='outline-none p-2 border w-full mt-1 border-black rounded-xl'
                    placeholder='**********'
                    {...register('panNumber')}
                />
                {errors.panNumber && <p className='text-red-500'>{errors.panNumber.message}</p>}

                <div className='w-full mt-4 flex flex-row items-center justify-between'>
                    <label htmlFor='gst' className='text-xl font-semibold'>
                        GST Invoicing
                    </label>
                    <input type='checkbox'
                        className='mr-2 border-1 border-black h-5 w-5'
                        checked={gst}
                        onChange={() => {
                            setGst(!gst)
                        }}
                    />
                </div>

                {
                    gst ?
                        <div>
                            <input
                                type='number'
                                name='gst'
                                id='gst'
                                className='outline-none p-2 border w-full mt-1 border-black rounded-xl'
                                placeholder='**********'
                                {...register('gstNumber')}

                            />
                            {errors.gstNumber && <p className='text-red-500'>{errors.gstNumber.message}</p>}
                        </div>

                        : null
                }


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
