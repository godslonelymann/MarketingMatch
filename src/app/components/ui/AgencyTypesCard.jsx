function AgencyTypesCard({icon, title, description}){

    return(
       <div className="bg-[#F5F6FA]  w-[275px] text-center rounded-2xl ">
            <div className="flex flex-col ">
                <img src={icon} alt="" height={36} width={36} />
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
       </div>
    );
}

export default AgencyTypesCard;