import ReviewCard from "./ui/ReviewCard"

function Reviews() {
  return (
   <>
    <div className="h-screen w-full flex justify-center items-center bg-[#F5F6FA] ">
      <div className="h-[80%] w-full max-w-screen-xl  flex justify-center items-center flex-col gap-y-15">
        <h1 className="font-[700] text-[#1A2B4A] text-3xl">Trusted by Founders Who Move Fast — and Think Deep</h1>
        <div className="h-1/2 w-full grid grid-cols-2 place-items-center gap-x-10">
           <ReviewCard
           review = "We didn't need a big agency. We needed one that understood our energy. This platform nailed it."
           name = "Ritesh"
           position = "D2C Brand Owner"
           />
           <ReviewCard 
           review = "Within 10 days, we had 3 solid options. All felt right. That never happens."
           name = "Meenal"
           position = "Series A Startup"
           />
        </div>
      </div>

   </div>
   </>
  )
}

export default Reviews