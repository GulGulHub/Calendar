import React  from 'react';


function Months({ currentMonth, setCurrentMonth }) {
  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      currentMonth.getDate()
    );
    setCurrentMonth(nextMonth);
  };

  const handlePreviousMonth = () => {
    const previousMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      currentMonth.getDate()
    );
    setCurrentMonth(previousMonth);
  };
  const monthString = currentMonth.toLocaleString('en-US', { month: 'long' });
  const yearString = currentMonth.getFullYear().toString();

  return (
    <div>
      
      <div className="flex items-center">
        <button onClick={handlePreviousMonth} className="inline cursor-pointer hover:cursor-pointer">
          &lt;
        </button>
        <div className="inline">{`${monthString} ${yearString}`}</div>
        <button onClick={handleNextMonth} className="inline cursor-pointer hover:cursor-pointer">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Months;

