import Image from 'next/image';

function HowItWorksIcon({ title, icon }){

    return(
        <>
          <div className='flex justify-center items-center flex-col'>
              <div className="bg-[#2563EB] rounded-full h-[64px] w-[64px] flex justify-center items-center ">
                <img src={icon} alt="" />
                {/* <div className='bg-amber-100'>
                    <h1>{title}</h1>
                </div> */}
                
            </div>
            <div className='bg-amber-100'>
                    <h1>{title}</h1>
            </div>
          
          </div>
        
        </>
        
        

    );

}

export default HowItWorksIcon;