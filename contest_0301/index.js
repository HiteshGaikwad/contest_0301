
// Array to store added employees
let employees = [];

// Generate unique ID for each employee
let employeeId = 1;

// Function to add an employee
function addEmployee(name, profession, age) {
    const employee = {
        id: employeeId++,
        name: name,
        profession: profession,
        age: age
    };
    employees.push(employee);
}

// Function to remove an employee
function removeEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
}

// Function to display added employees
function displayEmployees() {
    const employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = ""; // Clear existing data

    if (employees.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "You have 0 Employees.";
        emptyMessage.className="initial_msg";
        employeeList.appendChild(emptyMessage);
    } else {
    employees.forEach(employee => {
        const div = document.createElement("div");
        div.className="employee";
        div.innerHTML = `
        <div class="employee_box">
            <p>${employee.id}.</p>
            <p>Name: ${employee.name}</p>
            <p>Profession: ${employee.profession}</p>
            <p>Age: ${employee.age}</p>
            </div>
            <button onclick="removeEmployee(${employee.id})" class="delete-btn">Delete User</button>
        `;

        employeeList.appendChild(div);
    });
 }   
}

// Form submission event handler
document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("nameInput").value;
    const profession = document.getElementById("professionInput").value;
    const age = document.getElementById("ageInput").value;

    if (name && profession && age) {
        addEmployee(name, profession, age);
        displayEmployees();
        document.getElementById("message").textContent = "Employee added successfully.";
        document.getElementById("message").className = "success";
        document.getElementById("nameInput").value = "";
        document.getElementById("professionInput").value = "";
        document.getElementById("ageInput").value = "";
    } else {
        document.getElementById("message").textContent = "Error : Please Make sure All the fields are filled before adding in an employee !";
        document.getElementById("message").className = "error";
    }
});

displayEmployees();

