import React, { useState } from 'react';
import Days from './Days.js';
import Months from './Months.js';
import Tablehead from './Tablehead.js';

function Calender() {
    const [currentMonth, setCurrentMonth] = useState(new Date()); // Set the initial month here

    return <div className='h-full'>
    <div id="calender-wrapper" className="bg-green-400 h-full" >
        <div id="Calender" className="text-3xl font-bold hover:text-gray-700 text-center p-2">
            <div className="flex items-center justify-center">
                <Months currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
            </div>
        </div>
        <div id="table_wrapper" className="">
            <table id="my-calender" className="w-full h-full">
                <thead>
                    <Tablehead />
                </thead>
                <tbody className="bg-transparent">
                    <Days currentMonth={currentMonth} />
                </tbody>
            </table>
        </div>
    </div >
</div>;
    

}

export default Calender;
