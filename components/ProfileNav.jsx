import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function ProfileNav() {
    const pathname = usePathname();
    let inActiveLink = 'p-2 w-44 mt-2 flex justify-center border border-black rounded-xl font-bold text-[#003c3c] '
    let activeLink = "p-2 mt-2 w-44 flex justify-center border rounded-xl font-bold text-white bg-[#003c3c] "

    return (

        <div className='border border-black rounded-2xl p-4 flex flex-col items-center min-w-[300px]'>
            <img src='/assets/images/userPic.png' />
            <img src='/assets/images/changePic.png' />
            <h1 className='text-3xl font-bold mt-5'>Samira Hadid</h1>

            <Link href='/profile' className={pathname === "/profile" ? activeLink : inActiveLink}>
                Profile
            </Link>

            <Link href='/myStore' className={pathname === "/myStore" ? activeLink : inActiveLink}>
                My Store
            </Link>

            <Link href='/earnings' className={pathname === "/earnings" ? activeLink : inActiveLink}>
                Earnings
            </Link>

            <Link href='/address' className={pathname === "/address" ? activeLink : inActiveLink}>
                Address
            </Link>

            <Link href='/' className={activeLink}>
                Logout
            </Link>
        </div>
    )
}
