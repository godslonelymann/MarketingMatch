import CTAButton from "./ui/CTAButton";

function QuizCTA() {
  return (
    <>
      <div className="h-full w-full  flex justify-center items-center">
        <div className="h-1/2 my-40 w-full max-w-screen-xl flex  justify-between items-center gap-x-10">
          <div className="h-full w-1/2  flex flex-col justify-center ">
            <h1 className="text-3xl font-[700] text-#1A2B4A">What Kind of Founder Are You?</h1>
            <p className="text-xl font-[400] text-[#4B5563] mt-5">Discover agencies that fit your leadership energy — not just your budget.</p>
          </div>
          <div className="h-full w-1/2  flex justify-center items-center">
            <CTAButton 
            className="p-5 rounded-4xl font-[500] text-base"
            title="Take the 60-second Quiz" />
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizCTA;
