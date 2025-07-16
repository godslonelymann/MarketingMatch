import React from 'react'

function AnswerBlock({icon, title}) {
  return (
    <>
        <div className='h-full w-full max-w-screen-xl bg-[#F9FAFB] flex justify-center items-center flex-col space-y-10 rounded-2xl mt-10'>
            <img src={icon} alt="" />
            <h1 className='text-[#111827] font-[400] text-lg'>{title}</h1>
        </div>
    
    </>
  )
}

export default AnswerBlock