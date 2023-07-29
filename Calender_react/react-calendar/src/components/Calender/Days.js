import React, { useEffect } from 'react';


function Days({ currentMonth }) {
  

  useEffect(() => {
    fillCalendar();
  }, [currentMonth]);

  const fillCalendar = () => {
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

    let check_day = firstDay.getDay();
    let first_weekday = check_day === 0 ? 6 : check_day - 1;
    let counter = 1;

    const rows = [];
    let row = [];

    while (counter <= lastDay.getDate()) {
      for (let i = 0; i < 7; i++) {
        if (first_weekday !== i && counter === 1) {
          row.push(<td key={`empty-${i}`}></td>);
        } else if (first_weekday === i && counter === 1) {
          row.push(
            <td key={`day-${counter}`} className="bg-transparent bg-blue-100 text-center">
              {counter}
            </td>
          );
          counter += 1;
        } else if (counter <= lastDay.getDate()) {
          row.push(
            <td key={`day-${counter}`} className="bg-transparent bg-red-400 text-center">
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
    }

    return rows;
  };

  return fillCalendar();
}

export default Days;
