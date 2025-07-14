function AgencyTypesCard({icon, title, description, review}){

    return(
       <div className="bg-[#F5F6FA] h-full w-[100%]  rounded-2xl ">
            <div className="flex flex-col justify-center items-start h-full gap-y-10 p-10">
               <div className="h-full w-full flex flex-col">
                 <img 
                className="text-[#1A2B4A]"
                src={icon} alt="" height={36} width={36}/>
                <h1 className="font-[700] text-[#1A2B4A] text-xl py-5">{title}</h1>
                <p className="text-base text-[#4B5563] font-[400] py-6">{description}</p>
                <p className="text-[#2563EB] text-sm font-[400] py-10">{review}</p>
               </div>
            </div>
       </div>
    );
}

export default AgencyTypesCard;