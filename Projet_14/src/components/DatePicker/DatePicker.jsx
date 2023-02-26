import React, {useState } from 'react';
import ReactDatePicker from 'react-datepicker';
// import './DatePicker.css';
import "react-datepicker/dist/react-datepicker.css";

export const DatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <ReactDatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            />
    );
};

export const DateOfBirth = () => {
    return (
        <ReactDatePicker>
        <input type="date" name="DateOfBirth" id="dateOfBirth" />
        </ReactDatePicker>
    )};