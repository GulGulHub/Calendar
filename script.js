let today_date = new Date()
let first_day = new Date(today_date.getFullYear(), today_date.getMonth(), 1)
// gives me the first day

let last_day = new Date(today_date.getFullYear(), today_date.getMonth() + 1, 0); 
// gives me the month, +1 = next month , 0= last day of previous, so of this month
let check_this = last_day.getDate()
let current_year = today_date.getFullYear()
let current_month = today_date.toLocaleString('default', { month: 'long' });

let arrow = document.querySelector('#arrow-left');
arrow.addEventListener('click', newFunction);



function newFunction () {
        let checkMonth = document.querySelector('#month').innerText;
        let checkYear = document.querySelector('#year').innerText;
      
        // Convert the month name to its corresponding numerical value
        let monthNumber = new Date(Date.parse(checkMonth + " 1, " + checkYear)).getMonth();
      
        // Create a new Date object with the given month and year
        let currentDate = new Date(checkYear, monthNumber, 1);
      
        // Get the previous month and year
        let previousMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        let previousMonth = previousMonthDate.toLocaleString('default', { month: 'long' });
        let previousYear = previousMonthDate.getFullYear();

        let firstDayOfMonth = new Date(previousYear, previousMonthDate.getMonth(), 1);
        let lastDayOfMonth = new Date(previousYear, previousMonthDate.getMonth() + 1, 0);
        console.log('Previous month:', previousMonth);
        console.log('Previous year:', previousYear);
        create_years_months(previousMonth, previousYear)
        fill_calendar(lastDayOfMonth,firstDayOfMonth)

      }
      

function create_years_months(chosen_month, chosen_year) {
    let month = document.getElementById("month")
    month.innerText = chosen_month
    let year = document.getElementById("year")
    year.innerText = chosen_year
}

create_years_months(current_month, current_year)



function fill_calendar(last, first) {
    let first_weekday = first.getDay() - 1;
    console.log("got in");
    console.log(last.getDate());
    let counter = 1;
    let table_body = document.querySelector('tbody');

    // Create a new table body
    let new_table_body = document.createElement('tbody');
    let new_row = document.createElement('tr');
    new_table_body.appendChild(new_row);
    let row = new_row;

    while (counter <= last.getDate()) {
        for (let i = 0; i < 7; i++) {
            if (first_weekday != i && counter == 1) {
                console.log('added empty');
                let empty_day = document.createElement('td');
                empty_day.innerHTML = "";
                row.append(empty_day);
                if (i == 6) {
                    new_row = document.createElement('tr'); // Create a new row
                    new_table_body.appendChild(new_row);
                    row = new_row; // Update `row` to the newly created row
                }
            } else if (first_weekday == i && counter == 1) {
                let new_day = document.createElement('td');
                new_day.innerHTML = counter;
                //new_day.style.backgroundColor = 'red';
                new_day.classList.add('bg-transparent', 'bg-blue-100', 'text-center');
                console.log(new_day.className);
                counter += 1;
                row.append(new_day);
                if (i == 6) {
                    new_row = document.createElement('tr'); // Create a new row
                    new_table_body.appendChild(new_row);
                    row = new_row; // Update `row` to the newly created row
                }
            } else if (counter <= last.getDate()) {
                let new_day = document.createElement('td');
                new_day.innerHTML = counter;
                new_day.classList.add('bg-transparent', 'bg-red-400', 'text-center');
                console.log(new_day.className);
                counter += 1;
                row.append(new_day);
                if (i == 6) {
                    new_row = document.createElement('tr'); // Create a new row
                    new_table_body.appendChild(new_row);
                    row = new_row; // Update `row` to the newly created row
                }
            }
        }
    }

    // Replace the old table body with the new one
    table_body.parentNode.replaceChild(new_table_body, table_body);
}




fill_calendar(last_day, first_day)
