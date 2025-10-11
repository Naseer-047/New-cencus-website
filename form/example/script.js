// Load existing data or empty array
let censusData = JSON.parse(localStorage.getItem("censusData")) || [ ];

// FORM PAGE HANDLER
if (document.getElementById("censusForm")) {
  const form = document.getElementById("censusForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value.trim();

    if (!name || !age || !gender || !address) {
      alert("Please fill all fields!");
      return;
    }

    const newEntry = { name, age, gender, address };
    censusData.push(newEntry);
    localStorage.setItem("censusData", JSON.stringify(censusData));

    alert("Census data submitted successfully!");
    form.reset();
  });
}

// ADMIN PAGE HANDLER
if (document.getElementById("dataTable")) {
  const tbody = document.querySelector("#dataTable tbody");

  // Populate table
  censusData.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.name}</td>
      <td>${data.age}</td>
      <td>${data.gender}</td>
      <td>${data.address}</td>
    `;
    tbody.appendChild(row);
  });

  // Clear Data Button
  document.getElementById("clearData").addEventListener("click", () => {
    if (confirm("Are you sure you want to delete all data?")) {
      localStorage.removeItem("censusData");
      tbody.innerHTML = "";
      alert("All data cleared!");
    }
  });
}
