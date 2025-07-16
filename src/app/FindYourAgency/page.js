import React from 'react'
import Questions from '../components/Questions'

function FindYourAgency() {
  return (
    <>
        <div className='h-screen w-full flex items-center flex-col'>
            <div className='h-1/4 w-full max-w-screen-xl flex justify-center items-center flex-col space-y-3'>
                <h1 className='font-[500] text-5xl text-[#111827]'>Let's find an agency that gets you</h1>
                <p className='font-[400] text-xl text-[#4B5563] '>Answer a few quick questions. Takes 2 minutes.</p>
            </div>
            <Questions />
            <Questions />
        </div>
        
    
    </>
    
  )
}

export default FindYourAgency