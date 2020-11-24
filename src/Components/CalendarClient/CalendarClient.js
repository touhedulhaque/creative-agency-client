import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarClient = () => {
    const handleDateChange = date => {
        console.log(date);
    }
    return (
        <div>
            <Calendar
                onChange={handleDateChange}
                value={new Date()}
            />

        </div>
    );
};

export default CalendarClient;