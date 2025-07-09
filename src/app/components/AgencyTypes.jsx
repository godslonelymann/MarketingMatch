import AgencyTypesCard from "./ui/AgencyTypesCard"


function AgencyTypes() {
  return (
      <div className="h-screen w-full bg-amber-200">
        <div className="bg-red-50 h-full max-w-screen-xl mx-auto flex justify-around items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-col-4 gap-15">
            <AgencyTypesCard
            icon = "/icons/at1.png"
            title = "Behavioural Thinkers"
            description = "Data-driven insights that shape customer decisions"
            moreInfo = "✔️ Trusted by 12 SaaS founders"
            />
            <AgencyTypesCard 
            icon = "/icons/at2.png"
            title = "Performance Hackers"
            description = "Optimization experts who crush KPIs"
            moreInfo = "Trusted by 15 SaaS founders" 
            />
            <AgencyTypesCard
            icon = "/icons/at3.png"
            title = "Brand Builders"
            description = "Creative minds that craft lasting impressions"
            moreInfo = "Trusted by 18 SaaS founders" 
            />
            <AgencyTypesCard
            icon = "/icons/at4.png"
            title = "B2B Growth Specialists"
            description = "Strategic thinkers who scale B2B businesses"
            moreInfo = "Trusted by 20 SaaS founders" />
          </div>
          
        </div>
      </div>
  )
}

export default AgencyTypes;