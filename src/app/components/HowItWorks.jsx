import HowItWorksIcon from "./ui/HowItWorksIcons"



function HowItWorks() {
  return (
    <div className="flex justify-center items-center bg-[#F5F6FA] max-w-screen h-full mt-15">
      
        <div className="w-[90%] my-20 text-center flex flex-col justify-center items-center h-[80%]  max-w-screen-xl py-10">
          <h1 className="font-[700] text-3xl text-[#1A2B4A]">Let's make this easy.</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 w-full mt-20">
            <div>
              <HowItWorksIcon 
              title = "Tell us about your business"
              icon = "/icons/icon1.png"
              description = "industry, growth stage, goals"
              />
             
            </div>
            <div>
              <HowItWorksIcon 
              title = "Set your style & mindset"
              icon = "/icons/icon2.png"
              description = "bold vs steady, creative vs data"
              />
              
            </div>
            <div>
              <HowItWorksIcon 
              title = "Get 3 curated agency matches"
              icon = "/icons/icon3.png" 
              description = "with proof, vibes & past results"
              />
             
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default HowItWorks