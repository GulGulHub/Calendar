import './App.css';
import Days from './components/Days.js';
import Months from './components/Months.js';
/*import Appointment from './components/Appointment.js'*/
import React, {useState} from 'react';


function App() {
  
  const [currentMonth, setCurrentMonth] = useState(new Date()); // Set the initial month here

  return (
    <article id="calender-section-column" className="flex m-5">

      <div id="calender-wrapper" className="bg-white ">

        <div id="Calender" className="text-3xl font-bold hover:text-gray-700 text-center p-2">
          <div className="flex items-center justify-center">
           <Months currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
        </div>
        </div>

        <div id="table_wrapper" className="mx-auto">
          <table id="my-calender" className="w-full">
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
            <tbody className="bg-transparent">
                <Days currentMonth={currentMonth}/>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}

export default App;
