import AgencyTypesCard from "./ui/AgencyTypesCard"


function AgencyTypes() {
  return (
   <>
    <div className="h-screen w-full bg-amber-200 flex justify-center items-center">
     
       <div className="h-1/2 w-[100%] max-w-screen-xl bg-red-300 grid grid-cols-4 place-items-center">
          <AgencyTypesCard />
          <AgencyTypesCard />
          <AgencyTypesCard />
          <AgencyTypesCard />
       </div>
     
    </div>
   </> 
  )
}

export default AgencyTypes