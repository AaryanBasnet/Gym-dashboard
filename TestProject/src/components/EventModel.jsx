import React from 'react'

import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineDragHandle } from "react-icons/md";
import { MdSchedule } from "react-icons/md";
import { MdSegment } from "react-icons/md";
import { useContext } from 'react';
import  GlobalContext  from './context/GlobalContext';
import { FaRegBookmark } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const labelsClasses = ["indigo", "gray", "green", "red", "yellow", "blue"];


import { useState } from 'react';


function EventModel() {
    const { setShowEventModel , daySelected, dispatchCalEvent, selectedEvent} = useContext(GlobalContext)
    const [title, setTitle] = useState(selectedEvent? selectedEvent.title : "")
    const [description, setDescription] = useState(selectedEvent? selectedEvent.description : "")
    const [selectedLabel, setSelectedLabel] = useState(selectedEvent ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
    :labelsClasses[0])
  

    function handleSubmit(e){
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        if(selectedEvent){
            dispatchCalEvent({type: 'update', payload: calendarEvent});
        }else{
            dispatchCalEvent({type: 'push', payload: calendarEvent});
        }



      
        setShowEventModel(false)
    }


    
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
        <form className="bg-white rounded-lg shadow-2xl w-1/4">
            <header className="bg-gray-200 rounded-t-lg p-4 flex justify-between items-center">
                <span className="text-grey-400">
                  <MdOutlineDragHandle />
                </span>
                <div>
                    {selectedEvent && (
                        <span onClick={()=> {dispatchCalEvent({type: "delete", payload: selectedEvent})
                        setShowEventModel(false)
                    
                        }}>


                            <MdDelete cursor="pointer" />

                        </span>
                    )}
                <button type="button" onClick={() => setShowEventModel(false)}>

                <span className="text-grey-400">
                    <IoIosCloseCircleOutline />
               </span>
                </button>
                </div>
                </header>
                <div className="p-3">
                    <div className="grid grid-cols-1/5 items-end gap-y-7">
                        <div>

                        </div>
                        <input type="text" name="title" placeholder="Add title" value={title} 
                        // required
                        className="pt-3 border-0 text-gray-500 text-xl font-semibold w-full bg-transparent focus:outline-none focus:ring-0 border-b-2 border-gray-200"
                        onChange={(e) => setTitle(e.target.value)}/>
                        <span className="text-gray-400 text-sm">
                            <MdSchedule />

                        </span>
                        <p>{daySelected.format("dddd, MMMM DD")}</p>
                        <span className="text-gray-400 text-sm">
                            <MdSegment />

                            </span>
                            <input type="text" name="description" placeholder="Add description" value={description} 
                        // required
                        className="pt-3 border-0 text-gray-500  w-full bg-transparent focus:outline-none focus:ring-0 border-b-2 border-gray-200"
                        onChange={(e) => setDescription(e.target.value)}/>
                        <span className="">
                            <FaRegBookmark  />

                        </span>
                        <div className="flex gap-x-2">
                            {labelsClasses.map((lblclass, i) => (
                                <span key={i} 
                                onClick={() => setSelectedLabel(lblclass)}
                                className={`bg-${lblclass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                                    {selectedLabel === lblclass && <span>
                                   <FaCheck text="white" fontSize="1em" />
                                </span>}
                                    
                                </span>
                            ))}
                        </div>


                    </div>
                </div>
            <footer className="flex justify-end border-t p-3 mt-5">
                <button type="submit" 
                onClick={handleSubmit}
                 className="bg-blue-500 text-white px-4 py-2 rounded-full">Save</button>

            </footer>
        </form>
      
    </div>
  )
}

export default EventModel
