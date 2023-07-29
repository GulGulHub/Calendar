import './App.css';
import Calender from './components/Calender/Calender.js'
/*import Appointment from './components/Appointment.js'*/
import ToDo from './components/ToDo.js'
import Appointment from './components/Appointment.js'
import API1 from './components/API1.js'
import API2 from './components/API2.js'
import API3 from './components/API3.js'
import React from 'react';
import Background from './universe.jpg'


function App() {


  return (
    <div bg-cover h-100
    style={{backgroundImage: "url(${Background})"}}>
    <div className="grid grid-rows-3 grid-cols-3 gap-4 text-pink-400">

      <div className="row-span-1 col-span-1">
        <Appointment />
      </div>
      <div className="row-span-2 col-span-2">
        <Calender />
      </div>
      <div className="row-span-1 col-span-1">
        <ToDo />
      </div>
      
      <div className="row-span-1 col-span-1">
        <API1 />
      </div>
      <div className="row-span-1 col-span-1">
        < API2 />
      </div>
      <div className="row-span-1 col-span-1">
        <API3 />
      </div>

    </div>
    </div>
  );
}

export default App;
