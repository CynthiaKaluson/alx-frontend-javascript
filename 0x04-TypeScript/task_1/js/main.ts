// main.ts

// 1. Function to display a message
export function displayMessage(message: string): void {
  console.log(message);
}

// 2. Create a student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 3. Create two students
const student1: Student = {
  firstName: "Cynthia",
  lastName: "Kalu",
  age: 25,
  location: "Nigeria",
};

const student2: Student = {
  firstName: "James",
  lastName: "Okorie",
  age: 27,
  location: "Lagos",
};

// 4. Create an array of students
const studentsList: Student[] = [student1, student2];

// 5. Render table
const table = document.createElement("table");
const headerRow = table.insertRow();
headerRow.innerHTML = "<th>First Name</th><th>Location</th>";

studentsList.forEach((student) => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});

document.body.appendChild(table);

