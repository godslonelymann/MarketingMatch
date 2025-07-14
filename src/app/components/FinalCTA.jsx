import CTAButton from "./ui/CTAButton"


function FinalCTA() {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center bg-[#1A2B4A]">
        <div className="h-[80%] w-full max-w-screen-xl flex justify-center items-center flex-col gap-y-10 my-40">
          <h1 className="font-[700] text-3xl text-[#FFFFFF]">Your next agency shouldn't be a gamble.</h1>
          <p className="font-[400] text-xl text-[#FFFFFF]">Find the one that gets your vision — and helps you scale with clarity.</p>
          <CTAButton title="Start Finding" />
        </div>
      </div>
    
    </>
  )
}

export default FinalCTA