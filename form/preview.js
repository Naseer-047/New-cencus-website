
const data = JSON.parse(localStorage.getItem('tempCencus'));
console.log(data);

    if (data) {
      document.getElementById("pstate").textContent = data.state;
      document.getElementById("pdistrict").textContent = data.district;
      document.getElementById("pCity").textContent = data.city;
      document.getElementById("pBlocknumber").textContent = data.enemuration;
      document.getElementById("pHousehold").textContent = data.household;
      document.getElementById("pFamilymembers").textContent = data.familyMembers;
    }
 document.getElementById("editBtn").addEventListener("click", () => {
      window.location.href = "form.html";
    });

    document.getElementById("submitBtn").addEventListener("click", () => {
      if (!data) {
        alert("No data found. Please fill the form again.");
        window.location.href = "form.html";
        return;
      }
        let allData = JSON.parse(localStorage.getItem("censusList")) || [];
      allData.push(data);     
      localStorage.setItem("censusList", JSON.stringify(allData));
      localStorage.removeItem("tempCensus");

      alert("Census data submitted successfully!");
      window.location.href = "/index.html";
    });
    