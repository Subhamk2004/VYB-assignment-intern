"use client"

import Link from "next/link";
import React, { useState } from "react";
import SideMenu from "./SideMenu.jsx";

const Navbar = () => {
    const [showMoreLg, setShowMoreLg] = useState(false);
    const [showSideNav, setShowSideNav] = useState(false);

    return (
        <nav className="w-[90%] sm:w-4/5 max-w-[1200px] rounded-3xl backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-400 border border-gray-200 py-2 px-3 flex flex-row items-center justify-between mt-3 fixed z-10">

            <div className="w-full sm:w-4/5 flex flex-row items-center sm:justify-between sm:gap-0 gap-3">
                <Link href='/'>
                    <img
                        src="/assets/images/logo.png"
                        alt="webiste  logo"
                        className="sm:h-10 sm:w-14 h-8 w-14"
                    />
                </Link>

                <div className="sm:w-2/5 w-[73%] bg-white rounded-3xl p-2 flex flex-row">
                    <img
                        src="/assets/images/search.png"
                        alt="search icon"
                        className="h-5 w-5 ml-2"
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-6 bg-transparent text-sm text-gray-900 outline-none"
                    />
                </div>

                <button className=" flex-row items-center hidden sm:flex">
                    <img
                        src="/assets/images/cart.png"
                        alt="cart icon"
                        className="h-5 w-5 ml-2 "
                    />
                    <span className="ml-2  text-gray-900">Cart</span>
                </button>
                <button className=" flex-row items-center hidden sm:flex">
                    <img
                        src="/assets/images/about.png"
                        alt="about icon"
                        className="h-5 w-5 ml-2"
                    />
                    <span className="ml-2  text-gray-900">About</span>
                </button>
                <button className=" flex-row items-center hidden sm:flex">
                    <img
                        src="/assets/images/contact.png"
                        alt="contact icon"
                        className="h-5 w-5 ml-2"
                    />
                    <span className="ml-2  text-gray-900">Contact</span>
                </button>
            </div>
            <div className="sm:hidden relative flex justify-center items-start">
                <button className="sm:hidden relative"
                    onClick={() => {
                        setShowSideNav(!showSideNav)
                    }}
                >
                    <img className="w-8" src="/assets/images/menus.png" />

                </button>
                {
                    showSideNav ?
                        <SideMenu />
                        :
                        null
                }
            </div>


            <button className="w-1/5 flex-row items-center gap-3 justify-end hidden sm:flex"
                onClick={() => {
                    setShowMoreLg(!showMoreLg);
                }}
            >
                <div className="flex flex-row items-center gap-3 border border-black p-2 rounded-3xl relative">
                    <img
                        src="/assets/images/user.png"
                        alt="user icon"
                        className="h-5 w-5 rounded-full"
                    />
                    <img
                        src="/assets/images/down-arrow.png"
                        alt="down arrow icon"
                        className="h-3 w-3 ml-2"
                    />
                    {showMoreLg ?
                        <div className="py-2 px-2 bg-gray-300 rounded-2xl absolute left-0 top-10 flex flex-col  shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-20">
                            <Link href="/profile"
                                className=" py-2 hover:font-bold px-7 rounded-2xl"
                            >
                                Profile
                            </Link>
                            <Link href="/login"
                                className=" py-2 hover:font-bold px-7 rounded-2xl"
                            >
                                Login
                            </Link>
                        </div>
                        :
                        null
                    }
                </div>
            </button>
        </nav>
    );
};

export default Navbar;