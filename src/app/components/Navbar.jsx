"use client"

import Link from "next/link";
import { useState } from "react";

// import About from "../About/page";


function Navbar(){

    const [MenuOpen, setMenuOpen] = useState(false)

    // const [buttonVisible, setButtonVisible] = useState(true)
    
    function HandleMobileMenu(){
        setMenuOpen(!MenuOpen);
        // setButtonVisible(!buttonVisible);
    }
    return(
        <>
            <div className="flex justify-around mt-7 items-center text-base ">
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

            {/* Mobile Navbar Menu : work on it*/} 

            {MenuOpen && <div className="flex justify-center">
                    <div className="bg-stone-100 flex justify-center text-2xl  flex-col rounded-3xl p-5 gap-5 mt-5 fixed w-[95%] md:hidden ">
                    <Link 
                    className="hover:bg-[#2563EB] hover:text-white p-2 rounded-xl"
                    href="/HowItWorks">How it Works</Link>
                    <Link 
                    className="hover:bg-[#2563EB] hover:text-white p-2 rounded-xl"
                    href="/AgencyTypes">Agency Types</Link>
                    <Link 
                    className="hover:bg-[#2563EB] hover:text-white p-2 rounded-xl"
                    href="/About">About</Link>
                    <Link 
                    className="hover:bg-[#2563EB] hover:text-white p-2 rounded-xl"
                    href="/AgencyTypes">Login</Link>
                    <Link 
                    className="hover:bg-[#2563EB] hover:text-white p-2 rounded-xl"
                    href="/FindYourAgency">Find your Agency...</Link>
            </div>
                
                
                
                </div>}

          
            
        </>
    )
}

export default Navbar;