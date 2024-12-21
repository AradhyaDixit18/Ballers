import React from 'react'
import InvestInImg from '../assets/investin.png'
function InvestIn() {
  return (
    <div className='w-full    bg-[#CDEA68] text-black' >
        <h1 className='font-["Rollgates"] tracking-tight text-4xl'> Rare opportunities. Rare access. Rarer people.</h1>
        <h1 className='font-["Neue_Montreal"] tracking-tight text-3xl'> A playground for the wealthy and successful to get access to the most exclusive assets, clubs and people in sports.</h1>
        <div className="w-full border-t-[1px] mt-20 border-[#a1b562] ">
            <div className=" flex  justify-center ">
              <h1 className='text-6xl mt-4 '>Invest In</h1>
            </div>
            <img src={InvestInImg} className='mt-4' alt="" />
        </div>
       </div>
  )
}

export default InvestIn