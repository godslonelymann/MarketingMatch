import Link from "next/link";
// import About from "../About/page";


function Navbar(){

    return(
        <>
            <div className="flex justify-around mt-7 items-center text-base">
                <Link href="/">MarketingMatch</Link>
                <div className="flex gap-10 items-center text-[#4B5563]">
                    <Link href="/HowItWorks">How it Works</Link>
                    <Link href="/AgencyTypes">Agency Types</Link>
                    <Link href="/About">About</Link>
                    <Link href="/AgencyTypes">Login</Link>
                    <Link 
                    className="p-2 px-10 bg-[#2563EB] rounded-3xl text-white"
                    href="/FindYourAgency">Find your Agency...</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;