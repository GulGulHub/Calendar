

// all dates for the date creations
let today_date = new Date()
let first_day = new Date(today_date.getFullYear(), today_date.getMonth(), 1)

// gives me the first day
let last_day = new Date(today_date.getFullYear(), today_date.getMonth() + 1, 0);
// gives me the month, +1 = next month , 0= last day of previous, so of this month
let check_this = last_day.getDate()
let current_year = today_date.getFullYear()
let current_month = today_date.toLocaleString('default', { month: 'long' });

let page_show_date = document.querySelector('#today-date');
page_show_date.innerText = today_date.toLocaleDateString();

let arrow_left = document.querySelector('#arrow-left');
arrow_left.addEventListener('click', function () {
    newFunction(-1);
});

let arrow_right = document.querySelector('#arrow-right');
arrow_right.addEventListener('click', function () {
    newFunction(1);
});



function newFunction(direction) {
    console.log('click-has-worked')
    let checkMonth = document.querySelector('#month').innerText;
    let checkYear = document.querySelector('#year').innerText;

    // Convert the month name to its corresponding numerical value
    let monthNumber = new Date(Date.parse(checkMonth + " 1, " + checkYear)).getMonth();

    // Create a new Date object with the given month and year
    let currentDate = new Date(checkYear, monthNumber, 1);

    console.log("new log!!!!", currentDate.getMonth() + direction)



    // Get the previous month and year
    let previousMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1);

    let previousMonth = previousMonthDate.toLocaleString('default', { month: 'long' });
    let previousYear = previousMonthDate.getFullYear();

    let firstDayOfMonth = new Date(previousYear, previousMonthDate.getMonth(), 1);
    let lastDayOfMonth = new Date(previousYear, previousMonthDate.getMonth() + 1, 0);
    console.log('Previous month:', previousMonth);
    console.log('Previous year:', previousYear);
    create_years_months(previousMonth, previousYear)
    fill_calendar(lastDayOfMonth, firstDayOfMonth)

}


function create_years_months(chosen_month, chosen_year) {
    let month = document.getElementById("month")
    month.innerText = chosen_month
    let year = document.getElementById("year")
    year.innerText = chosen_year
}

create_years_months(current_month, current_year)



function fill_calendar(last, first) {
    console.log('function fill calender started')
    check_day = first.getDay()
    let first_weekday
    if (check_day == 0) {
        first_weekday = 6; // I need this to make sure that the value is not -1
    }
    else {
        first_weekday = check_day - 1;
    }
    let counter = 1;
    let counter2 = 1;
    let table_body = document.querySelector('tbody');

    // Create a new table body
    let new_table_body = document.createElement('tbody');
    let new_row = document.createElement('tr');
    new_table_body.appendChild(new_row);
    let row = new_row;

    while (counter <= last.getDate() || counter2 <= 50) {
        for (let i = 0; i < 7; i++) {
            console.log('check the counter!!!!', counter)
            counter2 += 1
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
                console.log(new_day.class);
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
                console.log(new_day.class);
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

//function create_date_box() {




fill_calendar(last_day, first_day)

document.querySelectorAll('#my-calender td')
    .forEach(td => td.addEventListener("click", function (event) {
        let target_date = event.target.innerText;
        console.log('here is target_date:', target_date);
        make_a_date_entry(target_date);

        // all dates for the date creations
        let today_date = new Date()
        let first_day = new Date(today_date.getFullYear(), today_date.getMonth(), 1)
        
        // gives me the first day
        let last_day = new Date(today_date.getFullYear(), today_date.getMonth() + 1, 0);
        // gives me the month, +1 = next month , 0= last day of previous, so of this month
        let check_this = last_day.getDate()
        let current_year = today_date.getFullYear()
        let current_month = today_date.toLocaleString('default', { month: 'long' });
        
      
        let arrow_left = document.querySelector('#arrow-left');
        arrow_left.addEventListener('click', function () {
            newFunction(-1);
        });
        
        let arrow_right = document.querySelector('#arrow-right');
        arrow_right.addEventListener('click', function () {
            newFunction(1);
        });
        
        
        
        function newFunction(direction) {
            console.log('click-has-worked')
            let checkMonth = document.querySelector('#month').innerText;
            let checkYear = document.querySelector('#year').innerText;
        
            // Convert the month name to its corresponding numerical value
            let monthNumber = new Date(Date.parse(checkMonth + " 1, " + checkYear)).getMonth();
        
            // Create a new Date object with the given month and year
            let currentDate = new Date(checkYear, monthNumber, 1);
        
            console.log("new log!!!!", currentDate.getMonth() + direction)
        
        
        
            // Get the previous month and year
            let previousMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1);
        
            let previousMonth = previousMonthDate.toLocaleString('default', { month: 'long' });
            let previousYear = previousMonthDate.getFullYear();
        
            let firstDayOfMonth = new Date(previousYear, previousMonthDate.getMonth(), 1);
            let lastDayOfMonth = new Date(previousYear, previousMonthDate.getMonth() + 1, 0);
            console.log('Previous month:', previousMonth);
            console.log('Previous year:', previousYear);
            create_years_months(previousMonth, previousYear)
            fill_calendar(lastDayOfMonth, firstDayOfMonth)
        
        }
        
        
        function create_years_months(chosen_month, chosen_year) {
            let month = document.getElementById("month")
            month.innerText = chosen_month
            let year = document.getElementById("year")
            year.innerText = chosen_year
        }
        
        create_years_months(current_month, current_year)
        
        
        
        function fill_calendar(last, first) {
            console.log('function fill calender started')
            check_day = first.getDay()
            let first_weekday
            if (check_day == 0) {
                first_weekday = 6; // I need this to make sure that the value is not -1
            }
            else {
                first_weekday = check_day - 1;
            }
            let counter = 1;
            let counter2 = 1;
            let table_body = document.querySelector('tbody');
        
            // Create a new table body
            let new_table_body = document.createElement('tbody');
            let new_row = document.createElement('tr');
            new_table_body.appendChild(new_row);
            let row = new_row;
        
            while (counter <= last.getDate() || counter2 <= 50) {
                for (let i = 0; i < 7; i++) {
                    console.log('check the counter!!!!', counter)
                    counter2 += 1
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
                        console.log(new_day.classList);
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
                        console.log(new_day.classList);
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
        
        //function create_date_box() {
        
        
        
        
        fill_calendar(last_day, first_day)
        
        document.querySelectorAll('#my-calender td')
            .forEach(td => td.addEventListener("click", function (event) {
                let target_date = event.target.innerText;
                console.log('here is target_date:', target_date);
                make_a_date_entry(target_date);
                console.log("clicked");
            }));
        
        function make_a_date_entry(target_date) {
            let checkMonth = document.querySelector('#month').innerText;
            let checkYear = document.querySelector('#year').innerText;
        
            // Convert the month name to its corresponding numerical value
            let monthNumber = new Date(Date.parse(checkMonth + " 1, " + checkYear)).getMonth()
        
            let this_day = new Date(checkYear, monthNumber, target_date);
            page_show_date.innerText = this_day.toLocaleDateString()
        }
        
        
        // api calls 
        
        let url_bored = "http://www.boredapi.com/api/activity?type=recreational";
        
        // bored API
        
        
        let bored = document.querySelector('#bored-button')
        let show_bored = document.querySelector('#show-bored')
        bored.addEventListener("click", function () {
            make_bored();
        });
        
        function make_bored() {
            fetch(url_bored)
                .then(response => response.json())
                .then(data => {
                    let suggestion = data['activity'];
                    show_bored.innerText = suggestion;
                });
        }
        
        
        // Joke API   
        let url_joke = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
        
        let joke = document.querySelector('#joke-button');
        let show_joke = document.querySelector('#show-joke');
        joke.addEventListener("click", function () {
            console.log('joke-button-clicked')
            make_joke();
        });
        var newDiv = document.createElement('div');
        
        function make_joke() {
            console.log('make-joke running')
            try {
                fetch(url_joke)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        let setup = data['setup'];
                        let delivery = data['delivery']
                        show_joke.innerText = setup;
                        setTimeout(function () {
                            show_joke.append(newDiv)
                            newDiv.innerText = delivery
                        }, 3000
                        );
                    });
            } catch (error) {
                console.log('Error:', error);
                // Handle the error here (e.g., display an error message to the user)
            }
        }
        
        
        // Advice API   
        let url_advice = "https://api.adviceslip.com/advice";
        
        let advice = document.querySelector('#advice-button');
        let show_advice = document.querySelector('#show-advice');
        advice.addEventListener("click", function () {
            console.log('advice-button-clicked')
            make_advice();
        });
        var newDiv = document.createElement('div');
        
        function make_advice() {
            console.log('make-advice running')
            try {
                fetch(url_advice)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        let advice_slip = data['slip']['advice'];
                        show_advice.append(advice_slip)
                    });
            }
            catch (error) {
            console.log('Error:', error);
            }   
        }
        
        console.log("clicked");
    }));

function make_a_date_entry(target_date) {
    let checkMonth = document.querySelector('#month').innerText;
    let checkYear = document.querySelector('#year').innerText;

    // Convert the month name to its corresponding numerical value
    let monthNumber = new Date(Date.parse(checkMonth + " 1, " + checkYear)).getMonth()

    let this_day = new Date(checkYear, monthNumber, target_date);
    page_show_date.innerText = this_day.toLocaleDateString()
}


// api calls 

let url_bored = "http://www.boredapi.com/api/activity?type=recreational";

// bored API


let bored = document.querySelector('#bored-button')
let show_bored = document.querySelector('#show-bored')
bored.addEventListener("click", function () {
    make_bored();
});

function make_bored() {
    fetch(url_bored)
        .then(response => response.json())
        .then(data => {
            let suggestion = data['activity'];
            show_bored.innerText = suggestion;
        });
}


// Joke API   
let url_joke = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let joke = document.querySelector('#joke-button');
let show_joke = document.querySelector('#show-joke');
joke.addEventListener("click", function () {
    console.log('joke-button-clicked')
    make_joke();
});
var newDiv = document.createElement('div');

function make_joke() {
    console.log('make-joke running')
    try {
        fetch(url_joke)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let setup = data['setup'];
                let delivery = data['delivery']
                show_joke.innerText = setup;
                setTimeout(function () {
                    show_joke.append(newDiv)
                    newDiv.innerText = delivery
                }, 3000
                );
            });
    } catch (error) {
        console.log('Error:', error);
        // Handle the error here (e.g., display an error message to the user)
    }
}


// Advice API   
let url_advice = "https://api.adviceslip.com/advice";

let advice = document.querySelector('#advice-button');
let show_advice = document.querySelector('#show-advice');
advice.addEventListener("click", function () {
    console.log('advice-button-clicked')
    make_advice();
});
var newDiv = document.createElement('div');

function make_advice() {
    console.log('make-advice running')
    try {
        fetch(url_advice)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let advice_slip = data['slip']['advice'];
                show_advice.append(advice_slip)
            });
    }
    catch (error) {
    console.log('Error:', error);
    }   
}
