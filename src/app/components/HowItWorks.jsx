import HowItWorksIcon from "./ui/HowItWorksIcons"



function HowItWorks() {
  return (
    <div className="flex justify-center items-center bg-red-200 max-w-screen h-screen mt-10">
      
        <div className="text-center ">
          <h1>How it Works</h1>
          <div className="flex space-x-10 mt-10">
            <div>
              <HowItWorksIcon icon = ""/>
              <h1>card 1</h1>
            </div>
            <div>
              <HowItWorksIcon icon = "icons\i-1.png" />
              <h1>card 1</h1>
            </div>
            <div>
              <HowItWorksIcon icon = "icons/i-2.png" />
              <h1>card 1</h1>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default HowItWorks