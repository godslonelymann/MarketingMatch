"use client"

import Link from "next/link";
import { useState } from "react";

// import About from "../About/page";


function Navbar(){

    const [MenuOpen, setMenuOpen] = useState(false)

    const [buttonVisible, setButtonVisible] = useState(true)
    
    function HandleMobileMenu(){
        setMenuOpen(!MenuOpen);
        // setButtonVisible(!buttonVisible);
    }
    return(
        <>
            <div className="flex justify-around mt-7 items-center text-base">
                <Link 
                className=" "
                href="/">MarketingMatch</Link>
                 
                <button 
                onClick={HandleMobileMenu}
                className="md:hidden">
                    {MenuOpen ? 'X' : '☰'}
                </button>
                <div className="hidden md:flex gap-8 items-center text-[#4B5563]">
                    <Link href="/HowItWorks">How it Works</Link>
                    <Link href="/AgencyTypes">Agency Types</Link>
                    <Link href="/About">About</Link>
                    <Link href="/AgencyTypes">Login</Link>
                    <Link 
                    className="p-2 px-10 bg-[#2563EB] rounded-3xl text-white"
                    href="/FindYourAgency">Find your Agency...</Link>
                </div>
            </div>

            {/* Mobile Navbar Menu */}

            {MenuOpen && 
                
                
                <div className="fixed h-1/2 w-screen z-50 bg-black opacity-80 text-white mt-5 text-2xl flex flex-col items-center gap-5 p-10 ">
                
                    <Link 
                    onClick={() => setMenuOpen(false)}
                    href="/HowItWorks">How it Works</Link>
                    <Link 
                    onClick={() => setMenuOpen(false)}
                    href="/AgencyTypes">Agency Types</Link>
                    <Link 
                    onClick={() => setMenuOpen(false)}
                    href="/About">About</Link>
                    <Link 
                    onClick={() => setMenuOpen(false)}
                    className=""
                    href="/Login">Login</Link>
                    <Link 
                    onClick={() => setMenuOpen(false)}
                    className="p-2 px-10 bg-[#2563EB] rounded-3xl text-white"
                    href="/FindYourAgency">Find your Agency...</Link>
                </div>}
        </>
    )
}

export default Navbar;