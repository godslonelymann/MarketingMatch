import Link from "next/link";
// import About from "../About/page";


function Navbar(){

    return(
        <>
            <div className="flex justify-around mt-5">
                <h1>MarketingMatch</h1>
                <div className="flex gap-10">
                    <h1>How it Works</h1>
                    <h1>Agency Types</h1>
                    <Link href="/About">About</Link>
                    <h1>Login</h1>
                    <h1>Find your Agency...</h1>
                </div>
            </div>
        </>
    )
}

export default Navbar;