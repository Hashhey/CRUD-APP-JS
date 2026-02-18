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

console.log(employeeFormEle);

employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form Submitted");

  let newEmployeeData = {
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
    let resp = await fetch("http://localhost:5000/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployeeData),
    });
    console.log(resp);
    window.location.href = "/pages/AllEmloyees.html";
  } catch (err) {
    console.log(err);
    //navigation
    alert("Something went Wrong ❌");
  }
});
