import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import  GlobalContext  from './context/GlobalContext'
import { getMonth } from '../util'
import CalendarHeader from './CalendarHeader'
import Month from './Month'
import Sidebar from './Sidebar'
import EventModel from './EventModel'



function Events() {
  const [curentMonth, setCurrentMonth] = useState(getMonth())
  const {monthIndex, showEventModel} = useContext(GlobalContext)
  
  useEffect(()=>{ setCurrentMonth(getMonth(monthIndex)) }, [monthIndex])
  return (
    <>
    {showEventModel &&  <EventModel />}
    
    <div className="h-screen flex flex-col">
      <CalendarHeader />
      <div className="flex flex-1">
        <Sidebar />
        <Month month = {curentMonth} />
        </div>


    </div>
    </>
  )
}

export default Events
