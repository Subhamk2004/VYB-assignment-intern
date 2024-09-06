'use client';

import Link from 'next/link';
import React, { useState } from 'react';

function VerifyCreator() {
    const [verified, setVerified] = useState(false);
    const [instaId, setInstaId] = useState(null);
    const [ytId, setYtId] = useState(null);

    return (
        <div className='mt-24 p-4 rounded-2xl border border-black flex flex-col items-center'>
            {!verified ? (
                <div className='flex flex-col justify-center
                items-center'>
                    <h1 className='font-bold text-2xl'>Verify your Creator Account</h1>

                    <div className='flex flex-row items-center justify-center gap-4 mt-6'>
                        <img src='/assets/images/insta.png' className='w-8' alt='Instagram' />
                        <input
                            placeholder='Enter Instagram Id'
                            required
                            onChange={(e) => setInstaId(e.target.value)}
                            className='outline-none p-1 px-2 rounded-2xl border border-black'
                        />
                    </div>

                    <div className='flex flex-row items-center justify-center gap-4 mt-4'>
                        <img src='/assets/images/yt.png' className='w-8' alt='YouTube' />
                        <input
                            placeholder='Enter Youtube Id'
                            required
                            onChange={(e) => setYtId(e.target.value)}
                            className='outline-none p-1 px-2 rounded-2xl border border-black'
                        />
                    </div>

                    <button
                        className='p-2 mt-4 font-bold text-lg px-10 text-white rounded-xl bg-[#003c3c]'
                        onClick={() => {
                            if (instaId || ytId) {
                                setVerified(!verified)
                            }
                            alert('Please Provide any one of your creator ids')
                        }}
                    >
                        Continue
                    </button>
                </div>
            ) :
                <div className='flex flex-col justify-center
                items-center'>
                    <h1 className='font-bold text-2xl'>Congratulations!</h1>

                    <p className='mt-3 font-semibold text-xl'>Now You’re a Verified Creator </p>

                    <Link
                        href='/'
                        className='p-2 mt-4 font-bold text-lg px-10 text-white rounded-xl bg-[#003c3c]'
                    >
                        Continue
                    </Link>
                </div>
            }
        </div>
    );
}

export default VerifyCreator;
