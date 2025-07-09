function AgencyTypesCard({icon, title, description}){

    return(
       <div className="bg-[#F5F6FA] h-[80vh] w-[260px] text-center">
            <div>
                <img src={icon} alt="" />
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
       </div>
    );
}

export default AgencyTypesCard;