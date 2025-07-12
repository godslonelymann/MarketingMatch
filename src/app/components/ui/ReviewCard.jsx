function ReviewCard({review, name, position }) {
  return (
    <div className="h-[80%] w-[100%]  rounded-2xl flex flex-col justify-center p-10 gap-y-10 bg-[#FFFFFF]">
        
            <p className="font-[400] text-xl text-[#4B5563]">{review}</p>
            <div>
                <h1 className="font-[700] text-[#1A2B4A] text-base">{name}</h1>
                <p>{position}</p>
            </div>
            
        
    </div>
  )
}

export default ReviewCard;