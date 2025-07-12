import AgencyTypesCard from "./ui/AgencyTypesCard"


function AgencyTypes() {
  return (
   <>
    <div className="h-screen w-full flex justify-center items-center">
     
       <div className="h-[60%] w-[100%] max-w-screen-xl grid grid-cols-4 place-items-center gap-x-10">
          <AgencyTypesCard
          icon = "/icons/at1.png"
          title = "Behavioural Thinkers"
          description = "Data-driven insights that shape customer decisions"
          review = "✓ Trusted by 12 SaaS founders"
          />
          <AgencyTypesCard
          icon = "/icons/at2.png"
          title = "Performance Hackers"
          description = "Optimization experts who crush KPIs"
          review = "✓ Trusted by 15 SaaS founders"
          />
          <AgencyTypesCard 
          icon = "/icons/at3.png"
          title = "Brand Builders"
          description = "Creative minds that craft lasting impressions"
          review = "✓ Trusted by 18 SaaS founders"
          />
          <AgencyTypesCard 
          icon = "/icons/at4.png"
          title = "B2B Growth Specialists"
          description = "Strategic thinkers who scale B2B businesses"
          review = "✓ Trusted by 20 SaaS founders"
          />
       </div>
     
    </div>
   </> 
  )
}

export default AgencyTypes