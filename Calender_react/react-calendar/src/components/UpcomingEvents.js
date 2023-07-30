import React, { useState, useEffect } from 'react';

function UpcomingEvents() {
  const [appointments, setAppointments] = useState({});

  useEffect(() => {
    // Fetch appointments from localStorage and set the state
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || {};
    setAppointments(savedAppointments);
  }, []);

  // Function to sort appointments by date
  const sortAppointmentsByDate = (appointments) => {
    return Object.entries(appointments).sort(([dateStringA], [dateStringB]) => {
      const dateA = new Date(dateStringA);
      const dateB = new Date(dateStringB);
      return dateA - dateB;
    });
  };

  // Get the current date
  const currentDate = new Date();

  // Filter today's events and upcoming events (all events in the future)
  const filteredAppointments = sortAppointmentsByDate(appointments).filter(
    ([dateString, _]) => {
      const appointmentDate = new Date(dateString);
      return appointmentDate >= currentDate;
    }
  );

  // Separate today's events and upcoming events
  const todaysEvents = [];
  const upcomingEvents = [];
  const today = currentDate.toDateString();

  filteredAppointments.forEach(([dateString, appointment]) => {
    const date = new Date(dateString);
    const dateStringFormatted = date.toDateString();
    if (dateStringFormatted === today) {
      todaysEvents.push(appointment);
    } else {
      upcomingEvents.push({ date: dateStringFormatted, appointment });
    }
  });

  return (
    <div className="upcoming-events  pt-6 pl-10 ">
      <h1 className="text-2xl" >Today's Events:</h1>
      {todaysEvents.length > 0 ? (
        <ul className='p-4 text-white'>
          {todaysEvents.map((appointment, index) => (
            <li key={index}>{appointment}</li>
          ))}
        </ul>
      ) : (
        <p className='p-4 text-white'>No events for today.</p>
      )}

      <h2 className='text-2xl'>Upcoming Events:</h2>
      {upcomingEvents.length > 0 ? (
        <div className="max-h-48 overflow-y-auto">
          <ul className='text-white p-4'>
            {upcomingEvents.map(({ date, appointment }, index) => (
              <li key={index}>
                {date}: {appointment}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-white p-4">No upcoming events in the future.</p>
      )}
    </div>
  );
}

export default UpcomingEvents;
