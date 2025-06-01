interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Adnane",
  lastName: "Bachchar",
  age: 30,
  location: "Morocco",
};

const student2: Student = {
  firstName: "Mouad",
  lastName: "Bachchar",
  age: 36,
  location: "Morocco",
};

const studentsList: Student[] = [student1, student2];

// Create table and append rows
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const headerRow = document.createElement("tr");

["First Name", "Location"].forEach((heading) => {
  const th = document.createElement("th");
  th.textContent = heading;
  headerRow.appendChild(th);
});
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

const tableBody = document.createElement("tbody");
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
