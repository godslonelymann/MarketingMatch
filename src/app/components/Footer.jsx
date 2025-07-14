function Footer() {
  return (
   <>
     <div className="h-full w-full flex justify-center items-center">
        <div className="h-[80%] w-full max-w-screen-xl flex justify-between  my-10">
          <div>
            <h1 className="text-[#1A2B4A] font-[700] text-xl">mindmatch</h1>
            <p className="text-[#4B5563] py-10">Making agency discovery smarter 
              <br/> and more aligned with your business.</p>
          </div>
          <div>
            <h1 className="text-[#1A2B4A] font-[700] text-base">resources</h1>
            <div className="py-10 font-[400] text-[#4B5563] text-base">
              <h1>How It Works</h1>
              <h1>Agency Types</h1>
              <h1>Success Stories</h1>
              <h1>Blog</h1>
            </div>
          </div>
          <div>
            <h1 className="text-[#1A2B4A] font-[700] text-base">Legal</h1>
            <div className="py-10 font-[400] text-[#4B5563] text-base">
              <h1>Privacy Policy</h1>
              <h1>Terms of Service</h1>
              <h1>Cookie Policy</h1>
            </div>
          </div>
          <div>
            <h1 className="text-[#1A2B4A] font-[700] text-base">Stay Updated</h1>
            <div className="flex py-10">
              <input 
              className="px-3 py-2 rounded-4xl border-1 border-[#E5E7EB]"
              type="text" 
              placeholder="Enter your email"/>
              <button className="bg-[#1A2B4A] px-5 py-2 rounded-3xl mx-1.5">
                <img src="/icons/email.png" alt="" />
              </button>
            </div>
          </div>

        </div>
     </div>
   </>
  )
}

export default Footer