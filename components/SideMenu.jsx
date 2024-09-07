// components/SideMenu.js
import Link from 'next/link';
import { useState } from 'react';
import { FaUser, FaStore, FaRupeeSign, FaAddressCard, FaInfoCircle, FaHeadphones } from 'react-icons/fa';

export default function SideMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col absolute -right-2 rounded-lg  backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-400 border border-gray-200 p-2 px-4 w-[250px] justify-start items-start mt-10'>
            <img src='/assets/images/userPic.png'
                className='w-1/2 mt-20'
            />
            <h2 className='text-2xl font-bold'>Samira Hadid</h2>
            <h3 className='text-lg font-semibold'>@samirahadid</h3>

            <ul className='flex flex-col items-start gap-8'>
                <Link href='/profile' className='flex flex-row items-center w-full gap-5 text-xl font-semibold pt-10'>
                    <img src='/assets/images/sideuser.png'
                        className='w-7'
                    />
                    <p>Profile</p>
                </Link>
                <Link href='/myStore' className='flex flex-row items-center w-full  gap-5 text-xl font-semibold '>
                    <img src='/assets/images/store.png'
                        className='w-7'
                    />
                    <p>Store Info</p>
                </Link>
                <Link href='/earnings' className='flex flex-row items-center w-full  gap-5 text-xl font-semibold '>
                    <img src='/assets/images/rupee.png'
                        className='w-7'
                    />
                    <p>Earnings</p>
                </Link>
                <Link href='/address' className='flex flex-row items-center w-full  gap-5 text-xl font-semibold '>
                    <img src='/assets/images/address.png'
                        className='w-7'
                    />
                    <p>Address</p>
                </Link>
                <Link href='/' className='flex flex-row items-center w-full  gap-5 text-xl font-semibold '>
                    <img src='/assets/images/about.png'
                        className='w-7'
                    />
                    <p>About us</p>
                </Link>
                <Link href='/' className='flex flex-row items-center w-full  gap-5 text-xl font-semibold '>
                    <img src='/assets/images/support.png'
                        className='w-7'
                    />
                    <p>Contact us</p>
                </Link>
                <Link href='/login' className='flex flex-row items-center  text-white text-2xl font-bold  px-5 py-3 rounded-3xl bg-[#003c3c]'>
                    <p>Login</p>
                </Link>
            </ul>
        </div>
    );
}
