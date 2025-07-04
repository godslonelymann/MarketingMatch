import Link from "next/link";

function CTAButton({title, className=""}){

    return(
        <Link 
        className={`p-2 px-10 bg-[#2563EB] rounded-3xl text-white ${className}`}
        href="/FindYourAgency">{title}
        </Link>
    );
}

export default CTAButton;