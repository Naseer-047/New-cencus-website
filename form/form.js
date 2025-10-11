let allData =[];

const form = document.getElementById('censusForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let data = {
    state: document.getElementById('state').value,
    district: document.getElementById('district').value,
    city: document.getElementById('village').value,
    enemuration: document.getElementById('blockNumber').value,
    household: document.getElementById('head').value,
    familyMembers: document.getElementById('membersCount').value,
  };
  localStorage.setItem('tempCencus', JSON.stringify(data));
   allData.push(data);
  localStorage.setItem('userData', JSON.stringify(allData));
  window.location.href = 'preview.html'
} );

window.onload = () => {
const savedData = JSON.parse(localStorage.getItem('tempCensus'));
  if (savedData) {
    document.getElementById('state').value = savedData.state;
    document.getElementById('district').value = savedData.district;
    document.getElementById('village').value = savedData.city;
    document.getElementById('blockNumber').value = savedData.enemuration;
    document.getElementById('head').value = savedData.household;
    document.getElementById('membersCount').value = savedData.familyMembers;
  }

};

localStorage.setItem('userData', JSON.stringify(allData));