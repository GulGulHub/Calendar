let today_date = new Date()
let first_day = new Date(today_date.getFullYear(), today_date.getMonth(), 1)
let last_day = new Date(today_date.getFullYear(), today_date.getMonth() + 1, 0);
let check_this = last_day.getDate()
let first_weekday = first_day.getDay() - 1
let current_year = today_date.getFullYear()
let current_month = today_date.toLocaleString('default', { month: 'long' });

function create_years_months() {
    let month = document.getElementById("month")
    month.innerText = current_month
    let year = document.getElementById("year")
    year.innerText = current_year
}

create_years_months()

function fill_calendar(last_day) {
    console.log("got in")
    console.log(last_day.getDate())
    let counter = 1
    let table_body = document.querySelector('tbody')
    let new_row = document.createElement('tr')
    table_body.append(new_row)
    let row = new_row // Initialize `row` to the newly created row
    console.log("added row")
    while (counter <= last_day.getDate()) {
        for (let i = 0; i < 7; i++) {
            if (first_weekday != i && counter == 1) {
                console.log('added empty')
                let empty_day = document.createElement('td')
                empty_day.innerHTML = ""
                row.append(empty_day)
                if (i == 6) {
                    new_row = document.createElement('tr') // Create a new row
                    table_body.append(new_row)
                    row = new_row // Update `row` to the newly created row
                }
            } else if (first_weekday == i && counter == 1) {
                let new_day = document.createElement('td')
                new_day.innerHTML = counter
                counter += 1
                row.append(new_day)
                if (i == 6) {
                    new_row = document.createElement('tr') // Create a new row
                    table_body.append(new_row)
                    row = new_row // Update `row` to the newly created row
                }
            } else if (counter <= last_day.getDate()) {
                let new_day = document.createElement('td')
                new_day.innerHTML = counter
                counter += 1
                row.append(new_day)
                if (i == 6) {
                    new_row = document.createElement('tr') // Create a new row
                    table_body.append(new_row)
                    row = new_row // Update `row` to the newly created row
                }
            }
        }
    }
}



fill_calendar(last_day)
