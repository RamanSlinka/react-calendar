import React, {FC} from 'react';
import {Badge, Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";

interface EventCalendarProps {
    events: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = (props) => {

    const dateCellRender =(value: Moment)=> {
       const formatedDate = formatDate(value.toDate());
       const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);
        return (
           <ul >
               {currentDayEvents.map((ev, index)=>
               <li key={index}>
                   <Badge text={ev.description}/>{ev.description}
               </li>
               )}
           </ul>
        );
    }


    return (
        <Calendar
            dateCellRender={dateCellRender}
        />
    );
};

export default EventCalendar;