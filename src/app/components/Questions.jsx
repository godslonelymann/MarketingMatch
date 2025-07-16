import React from 'react'
import AnswerBlock from './ui/AnswerBlock'

function Questions() {
  return (
    <>
        <div className='h-screen w-full max-w-screen-xl flex items-center flex-col gap-y-2 mt-10 mb-20'>
            <h2 className='font-[400] text-base text-[#6B7280]'>Question 1 of 6</h2>
            <h1 className='font-[500] text-3xl text-[#111827]'>What type of business are you running?</h1>
            <h2 className='font-[400] text-base text-[#4B5563]'>Helps us narrow by domain expertise</h2>
            <div className='h-full w-full grid grid-cols-3 gap-6 mt-10'>
                <AnswerBlock 
                icon = "/icons/d2c.png"
                title = "D2C brand"
                />
                <AnswerBlock 
                icon = "/icons/mobile.png"
                title = "Mobile app"
                />
                <AnswerBlock 
                icon = "/icons/b2b.png"
                title = "B2B SaaS"
                />
                <AnswerBlock 
                icon = "/icons/local.png"
                title = "Local service"
                />
                <AnswerBlock 
                icon = "/icons/creator.png"
                title = "Creator brand"
                />
                <AnswerBlock 
                icon = "/icons/else.png"
                title = "Something else"
                />
            </div>
        </div>
        
    
    
    </>
  )
}

export default Questions