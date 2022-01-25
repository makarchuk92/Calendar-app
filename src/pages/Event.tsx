import React from 'react'
import EventCalendar from '../components/EventCalendar'


const Event: React.FC = () => {
    return(
        <div>
           <EventCalendar events={[]}/>
        </div>
    )
}

export default Event