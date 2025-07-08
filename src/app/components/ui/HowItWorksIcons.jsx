import Image from 'next/image';

function HowItWorksIcon({ title, icon, description }){

    return(
        <>
          <div className='flex justify-center items-center flex-col'>
              <div className="bg-[#2563EB] rounded-full h-[64px] w-[64px] flex justify-center items-center ">
                <img src={icon} alt="" />
               
                
            </div>
            <div className="">
                  <h1 className='text-[#2563EB] font-[700] text-xl mt-5'>{title}</h1>
                  <p className='text-[#2563EB] font-[400] text-base mt-5'>{description}</p>
            </div>
          
          </div>
        
        </>
        
        

    );

}

export default HowItWorksIcon;