const employeeFormEle = document.getElementById("employee-form");
const firstnameEle = document.getElementById("firstname");
const middlenameEle = document.getElementById("middlename");
const lastnameEle = document.getElementById("lastname");
const dobEle = document.getElementById("dob");
const maritalStatusEle = document.getElementById("maritalstatus");
const emailEle = document.getElementById("email");
const phoneNoEle = document.getElementById("mob");
const addressEle = document.getElementById("address");
const cityEle = document.getElementById("city");
const stateEle = document.getElementById("state");
const countryEle = document.getElementById("country");
const zipEle = document.getElementById("zip");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function getEditEmployee() {
  try {
    let resp = await fetch(`http://localhost:5000/employees/${id}`);
    let data = await resp.json();
    console.log(data);

    //Pre - Fill Input fields
    firstnameEle.value = data.firstname;
    middlenameEle.value = data.middlename;
    lastnameEle.value = data.lastname;
    dobEle.value = data.dob;
    maritalStatusEle.value = data.maritalstatus;
    emailEle.value = data.email;
    phoneNoEle.value = data.phoneno;
    addressEle.value = data.address.street;
    cityEle.value = data.address.city;
    stateEle.value = data.address.state;
    countryEle.value = data.address.country;
    zipEle.value = data.address.zipcode;
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getEditEmployee();
});

employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();

  let updateEmployeeData = {
    firstname: firstnameEle.value.trim(),
    middlename: middlenameEle.value.trim(),
    lastname: lastnameEle.value.trim(),
    dob: dobEle.value.trim(),
    email: emailEle.value.trim(),
    maritalstatus: maritalStatusEle.value.trim(),
    phoneno: phoneNoEle.value.trim(),
    address: {
      street: addressEle.value.trim(),
      city: cityEle.value.trim(),
      state: stateEle.value.trim(),
      country: countryEle.value.trim(),
      zipcode: zipEle.value.trim(),
    },
  };

  try {
    let resp = await fetch(`http://localhost:5000/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateEmployeeData),
    });
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
});

/*react useparams 
js - urlsearch params*/
