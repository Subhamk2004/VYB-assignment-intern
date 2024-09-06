'use client'

import React from 'react';
import ProfileNav from '@/components/ProfileNav';



export default function Earning() {


    return (
        <div className='mt-24 w-4/5 h-auto flex flex-row items-center justify-center gap-5'>
            <ProfileNav />
            <div className='border w-full min-w-[500px] max-w-[750px] border-black rounded-2xl p-4 flex flex-col'>
                <img className=''
                    src='/assets/images/earningStats.png'
                />
                <h2 className='text-2xl font-bold mt-4'>Withdraw History</h2>
                <hr className=' h-[1px] bg-gray-800  mt-4 mb-3' />
                <div className='w-full flex flex-row justify-between'>
                    <div className=''>
                        <p className='font-semibold text-lg mt-2'>
                            Available Balance
                            <span className='ml-6'>₹10000</span>
                        </p>

                        <p className='font-semibold text-lg mt-4'>
                            Last Withdraw
                            <span className='ml-6'>
                                ₹50000
                                <span className='ml-6 font-normal'>On 21 June 2024</span>
                            </span>
                        </p>

                        <p className='font-semibold text-lg mt-2'>
                            Next date you can withdraw
                            <span className='ml-6'>1 July 2024</span>
                        </p>
                        <p className='font-semibold text-lg mt-2'>
                            Payment Cycle
                            <span className='ml-6'>1 July 2024</span>
                        </p>
                    </div>
                    <div>
                        <button className='font-bold text-lg bg-gray-300 p-3 rounded-lg text-white'
                            disabled>Withdraw</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
