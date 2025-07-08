import AgencyTypesCard from "./ui/AgencyTypesCard"


function AgencyTypes() {
  return (
    <div className="h-screen max-w-screen flex justify-center items-center">
      <div className="max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 lg:gap-15">
        <AgencyTypesCard />
        <AgencyTypesCard />
        <AgencyTypesCard />
        <AgencyTypesCard />
      </div>
    </div>
  )
}

export default AgencyTypes