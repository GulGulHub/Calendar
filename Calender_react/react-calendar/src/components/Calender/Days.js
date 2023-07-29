import React, { useEffect, useState } from 'react';

function Days({ currentMonth, onDayClick }) {
  useEffect(() => {
    fillCalendar();
  }, [currentMonth]);

  const [appointments, setAppointments] = useState({});

  const fillCalendar = () => {
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

    let check_day = firstDay.getDay();
    let first_weekday = check_day === 0 ? 6 : check_day - 1;
    let counter = 1;

    const rows = [];
    let row = [];

    // Push empty cells for the days before the first day of the month
    for (let i = 0; i < first_weekday; i++) {
      row.push(<td key={`empty-${i}`}></td>);
    }

    while (counter <= lastDay.getDate()) {
      for (let i = first_weekday; i < 7; i++) {
        if (counter <= lastDay.getDate()) {
          row.push(
            <td
              key={`day-${counter}`}
              className="bg-transparent bg-red-400 text-center cursor-pointer day-cell"
              onClick={() =>
                onDayClick(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), counter))
              }
            >
              {counter}
            </td>
          );
          counter += 1;
        }

        if (i === 6) {
          rows.push(<tr key={`row-${counter}`}>{row}</tr>);
          row = [];
        }
      }
      first_weekday = 0; // Reset first_weekday to 0 for the remaining weeks
    }

    return rows;
  };

  return (
    <table id="my-calendar" className="w-full h-full border-collapse">
      <thead>
        <tr>
          <th className="bg-fuchsia-600 border-2 text-s p-1">Monday</th>
          <th className="bg-fuchsia-600 border-2 text-s p-1">Tuesday</th>
          <th className="bg-fuchsia-600 border-2 text-s p-1">Wednesday</th>
          <th className="bg-fuchsia-600 border-2 text-s p-1">Thursday</th>
          <th className="bg-fuchsia-600 border-2 text-s p-1">Friday</th>
          <th className="bg-fuchsia-600 border-2 text-s p-1">Saturday</th>
          <th className="bg-fuchsia-600 border-2 text-s p-1">Sunday</th>
        </tr>
      </thead>
      <tbody className="bg-transparent">{fillCalendar()}</tbody>
    </table>
  );
}

export default Days;
