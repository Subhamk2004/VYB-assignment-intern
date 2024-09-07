'use client'

import React, { useState, useEffect } from 'react';
import ProfileNav from '@/components/ProfileNav';



export default function Earning() {
    const [showProfileNav, setShowProfileNav] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setShowProfileNav(window.innerWidth > 640);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    return (
        <div className='mt-24 sm:w-4/5 h-auto flex flex-row items-center justify-center gap-5 mb-5 sm:mb-0'>
            {showProfileNav && <ProfileNav />}
            <div className='border w-full sm:min-w-[500px] max-w-[750px] border-black rounded-2xl p-4 flex flex-col'>
                {!showProfileNav ?
                    <div className='flex flex-col  w-[300px]'>
                        <img src='/assets/images/all.png' />
                        <img src='/assets/images/chart.png'/>
                    </div>
                    :
                    <img className='w-[390px] sm:w-auto'
                        src='/assets/images/earningStats.png'

                    />
                }
                <h2 className='text-2xl font-bold mt-4'>Withdraw History</h2>
                <hr className=' h-[1px] bg-gray-800  mt-4 mb-3' />
                <div className='w-[300px] sm:w-full flex flex-col sm:flex-row justify-between'>
                    <div className=''>
                        <p className='font-semibold text-lg mt-2'>
                            Available Balance
                            <span className='ml-6'>₹10000</span>
                        </p>

                        <p className=' flex-col sm:flex-row flex font-semibold text-lg mt-4'>
                            Last Withdraw
                            <span className='sm:ml-6'>
                                ₹50000
                                <span className='ml-6 font-normal'>On 21 June 2024</span>
                            </span>
                        </p>

                        <p className='flex flex-col sm:flex-row font-semibold text-lg mt-2'>
                            Next date you can withdraw
                            <span className='sm:ml-6'>1 July 2024</span>
                        </p>
                        <p className='font-semibold text-lg mt-2'>
                            Payment Cycle
                            <span className='ml-6'>1 July 2024</span>
                        </p>
                    </div>
                    <div className=''>
                        <button className='font-bold text-lg bg-gray-300 p-3 rounded-lg text-white'
                            disabled>Withdraw</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
