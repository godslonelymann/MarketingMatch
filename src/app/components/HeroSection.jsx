import CTAButton from "./ui/CTAButton";


function HeroSection() {
  return (
    <> 
   <div className="flex justify-center mt-10 mx-10  max-w-screen-xl md:mx-auto">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ">
      <div className="flex flex-col justify-center space-y-5">
        <h1 className="font-[700] text-3xl text-[#1A2B4A] sm:text-3xl lg:text-4xl xl:text-6xl ">We don’t sell you agencies. We help you find yours</h1>
        <h1 className="font-[400] text-base lg:text-xl text-[#4B5563] ">Answer a few simple questions - get matched with agencies who get your business and think like you do.</h1>
        <div className="mt-5">
          <CTAButton 
          className=""
          title="Find Your Agency..." />
          <p className="font-[400] text-xm mt-3 text-[#6B7280] ">Takes 2 minutes. No sales calls. No clutter.</p>
        </div>
      </div>
      <div  className="">
        <div className="flex justify-center">
          <img 
          width={"544px"}
          height={"500px"}
          src="FRAME.png" 
          alt="hero-section-image" />
        </div>
      </div>
    </div>
   </div>
    </>
  )
}

export default HeroSection;