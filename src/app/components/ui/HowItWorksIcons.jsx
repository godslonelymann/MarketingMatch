import Image from 'next/image';

function HowItWorksIcon({ icon }){

    return(
        <div className="bg-[#2563EB] rounded-full h-[64px] w-[64px]">
            {icon}
        </div>
    );

}

export default HowItWorksIcon;