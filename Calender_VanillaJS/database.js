// creating my database
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');



// Function to create the table
function createTable() {
    db.run(`
      CREATE TABLE IF NOT EXISTS appointments (
        id TEXT PRIMARY KEY,
        time TEXT,
        type_of_appointment TEXT
      )
    `);
  }

// Function to insert the appointment into the table
function insertAppointment(date, time, type) {
    db.run(
      'INSERT INTO appointments (id, time, type_of_appointment) VALUES (?, ?, ?)',
      [date, time, type],
      (err) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('Appointment inserted successfully.');
        }
      }
    );
  }
  

  // function to get the daily appointments displayed:
const new_dateText = document.querySelector('#today-date').innerText;
const query = `SELECT * FROM appointments WHERE id = ?`;

db.all(query, [new_dateText], (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    // Process the retrieved rows here
    console.log(rows);
  }
});


  
  // add event listener of the "send" button for databse
  const sendButton = document.querySelector('#send-button');
  sendButton.addEventListener('click', function () {
    const timeInput = document.querySelector('#time-data');
    const typeInput = document.querySelector('#type-data');
    const dateText = document.querySelector('#today-date').innerText;
  
    const time = timeInput.value;
    const type = typeInput.value;
    const date = dateText.trim();
  
    insertAppointment(date, time, type);
  
    // Clear input fields after inserting the appointment
    timeInput.value = '';
    typeInput.value = '';
  });
  
  // Call the createTable function to ensure the table exists
  createTable();
  
  
