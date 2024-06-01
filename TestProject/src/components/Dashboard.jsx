import React from 'react'
import SmallCalendar from './SmallCalendar'

function Dashboard() {
  return (
    <div className="flex flex-col py-12 px-14">
      <h2>Dashboard</h2>
      
      <div className="flex space-col py-10 px-14 justify-between">
        <div className="w-1/5 h-[150px} border border-slate-400 rounded flex flex-col  p-4 mt-5 text-black">
            <span> Total Sales</span>
            <span className="text-gray-400"> NRs. 2,70,000 +</span>
        </div>
        <div className="w-1/5 h-[150px} border  border-slate-400 rounded flex flex-col p-4 mt-5 ml-20  text-black">
            <span> Members Joined </span>
            <span className="text-gray-900"> 42 +</span>
        </div>
        
        <SmallCalendar />
      </div>
      
      


    </div>
  )
}

export default Dashboard
