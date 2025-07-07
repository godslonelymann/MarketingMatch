import HowItWorksIcon from "./ui/HowItWorksIcons"



function HowItWorks() {
  return (
    <div className="flex justify-center items-center bg-red-200 max-w-screen h-screen mt-10">
      
        <div className="bg-amber-50 w-[90%] text-center flex flex-col justify-center items-center h-[80%] m-auto">
          <h1 className="font-[700] text-3xl">Let's make this easy.</h1>
          <div className="flex  items-center  justify-around bg-amber-400 w-full mt-20">
            <div>
              <HowItWorksIcon 
              title = "Tell us about your business"
              icon = "/icons/icon1.png"/>
              <h1>card 1</h1>
            </div>
            <div>
              <HowItWorksIcon 
              title = "Set your style & mindset"
              icon = "/icons/icon2.png" />
              <h1>card 1</h1>
            </div>
            <div>
              <HowItWorksIcon 
              title = "Get 3 curated agency matches"
              icon = "/icons/icon3.png" />
              <h1>card 1</h1>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default HowItWorks