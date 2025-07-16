import React from 'react'
import Questions from '../components/Questions'

function FindYourAgency() {
  return (
    <>
        <div className='h-screen w-full flex items-center flex-col'>
            <div className='h-1/4 w-full max-w-screen-xl flex justify-center items-center flex-col space-y-3'>
                <h1 className='font-[500] text-5xl text-[#111827]'>Lets find an agency that gets you</h1>
                <p className='font-[400] text-xl text-[#4B5563] '>Answer a few quick questions. Takes 2 minutes.</p>
            </div>
            <Questions
            questionNum = "Question 1 of 6"
            question = "What type of business are you running?"
            description = "Helps us narrow by domain expertise"
            />
            <Questions 
            questionNum = "Question 2 of 6"
            question = "What's your primary goal right now?"
            description = "Helps us narrow by domain expertise"
            />
            <Questions 
            questionNum = "Question 3 of 6"
            question = "What type of business are you running?"
            description = "Helps us narrow by domain expertise"
            />
            <Questions 
            questionNum = "Question 4 of 6"
            question = "What type of business are you running?"
            description = "Helps us narrow by domain expertise"
            />
            <Questions 
            questionNum = "Question 5 of 6"
            question = "What type of business are you running?"
            description = "Helps us narrow by domain expertise"
            />
            <Questions 
            questionNum = "Question 6 of 6"
            question = "What type of business are you running?"
            description = "Helps us narrow by domain expertise"
            />
        </div>
        
    
    </>
    
  )
}

export default FindYourAgency