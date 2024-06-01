import React, { useEffect } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { useReducer } from "react";

import GlobalContext from "./GlobalContext";

function saveEventsReducer(state, {type, payload}) {
    switch (type) {
        case "push":
            return [...state, payload]
        case "update":
            return state.map((event) => event.id === payload.id ? payload : event)
        case "delete":
            return state.filter((event) => event.id !== payload.id)    
        default:
            return new Error();
    }

}

function initEvents() {
    const storageEvents = localStorage.getItem('savedEvents');
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
}

function ContextWrapper(props) {
    const [daySelected, setDaySelected] = useState(dayjs());
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModel, setShowEventModel] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, dispatchCalEvent] = useReducer(saveEventsReducer,[], initEvents);
  // save events to local storage
  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }
    , [savedEvents]);

    
   // clear selected event when model is closed
    useEffect(() => {
        if(!showEventModel){
            setSelectedEvent(null)
        }

    }, [showEventModel]);


  return (
    <GlobalContext.Provider value={{ monthIndex, 
    setMonthIndex,
     daySelected,
      setDaySelected,
      showEventModel,
       setShowEventModel,
       dispatchCalEvent,
       selectedEvent,
        setSelectedEvent,
       savedEvents
        }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
