import React, { useState } from 'react';
import Days from './Days.js';
import Months from './Months.js';
//import Tablehead from './Tablehead.js';
import AppointmentPopup from '../Popup/AppointmentPopup.js';


function Calender() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem('appointments')) || {}
  );

  const handleDayClick = (day) => {
    setSelectedDate(day);
    setShowPopup(true);
  };

  const handleSaveAppointment = (date, appointment) => {
    const dateString = date.toDateString();
    setAppointments((prevAppointments) => ({
      ...prevAppointments,
      [dateString]: appointment,
    }));
    localStorage.setItem(
      'appointments',
      JSON.stringify({ ...appointments, [dateString]: appointment })
    );
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="h-full">
      <div id="calender-wrapper" className="bg-green-400 h-full">
        {/* ... (rest of the code) */}
        <div id="table_wrapper" className="">
          <table id="my-calender" className="w-full h-full">
           
            <tbody className="bg-transparent">
              <Days currentMonth={currentMonth} onDayClick={handleDayClick} />
            </tbody>
          </table>
        </div>
      </div>
      {showPopup && (
        <AppointmentPopup
          selectedDate={selectedDate}
          currentMonth={currentMonth} // Pass currentMonth separately
          onClose={handleClosePopup}
          onSave={handleSaveAppointment}
        />
      )}
    </div>
  );
}

export default Calender;
