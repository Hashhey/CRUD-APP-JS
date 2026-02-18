const employeesContainerEle = document.getElementById("employees-container");
async function getAllEmployees() {
  try {
    let resp = await fetch(`https://crud-app-js-h1kp.onrender.com/employees`);
    let data = await resp.json();
    console.log(data);
    displayEmployees(data);
  } catch (err) {
    console.log(err);
    alert("something went wrong ❌");
  }
}

//calls Function After Dom Tree Creation
window.addEventListener("DOMContentLoaded", () => {
  getAllEmployees();
});

function displayEmployees(AllEmployees) {
  AllEmployees.map((emp) => {
    const empCard = document.createElement("article");
    empCard.innerHTML = `
        
        <h3> ${emp.firstname} ${emp.middlename} ${emp.lastname} </h3>`;
    employeesContainerEle.append(empCard);

    empCard.className = "emp-card";

    empCard.innerHTML = `
    <header class="emp-header">
    <h3 class="emp-name">
    ${emp.firstname} ${emp.middlename} ${emp.lastname}
    </h3>

    <span class="emp-id"> ID : ${emp.id}</span>

    </header>


    <section class = "emp-info">
    <p> <strong>Date Of Birth:</strong> ${emp.dob}</p>
    <p> <strong>Marital Status:</strong> ${emp.maritalstatus}</p>
    </section>

    <section class="emp-contact">
    <p> <strong>Email:</strong> ${emp.email}</p>
    <p> <strong> Phone:</strong> ${emp.phoneno}</p>
    </section>

    <section class="emp-address">
    <p><strong> Address:</strong></p>

    <p> 
    ${emp.address.street} ,${emp.address.city},<br>
    ${emp.address.state}, ${emp.address.country} - ${emp.address.zipcode}
    </p>
</section>

    <footer class="emp-actions">
    <button class="btn edit-btn" data-id="${emp.id}">Edit</button>
    <button class="btn delete-btn" data-id="${emp.id}">Delete </button>
    </footer>
    `;

    //apply delete event in deleteBtn
    const deleteBtn = empCard.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      handleDelete(emp.id);
    });

    //apply edit here
    const editBtn = empCard.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
      handleEdit(emp.id);
    });

    employeesContainerEle.append(empCard);
  });
}

async function handleDelete(id) {
  console.log(id);
  try {
    let resp = await fetch(
      `https://crud-app-js-h1kp.onrender.com/employees${id}`,
      {
        method: "DELETE",
      },
    );
    console.log(resp);
  } catch (error) {
    console.log(error);
    alert("Unable to delete ❌");
  }
}

function handleEdit(id) {
  window.location.href = `EditEmployee.html?id=${id}`;
}
