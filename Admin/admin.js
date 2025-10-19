
let lodData=  JSON.parse(localStorage.getItem('censusList')) 
lodData.push(
  { household: "Aarav Sharma", district: "Visakhapatnam", state: "Andhra Pradesh", familyMembers: 5 },
  { household: "Kavya Reddy", district: "Guntur", state: "Andhra Pradesh", familyMembers: 4 },
  { household: "Rahul Varma", district: "Krishna", state: "Andhra Pradesh", familyMembers: 6 },

  { household: "Niharika Tamang", district: "Tawang", state: "Arunachal Pradesh", familyMembers: 3 },
  { household: "Rohit Choudhary", district: "Papum Pare", state: "Arunachal Pradesh", familyMembers: 5 },
  { household: "Meera Megu", district: "East Siang", state: "Arunachal Pradesh", familyMembers: 4 },

  { household: "Soham Das", district: "Kamrup Metropolitan", state: "Assam", familyMembers: 5 },
  { household: "Priya Deka", district: "Cachar", state: "Assam", familyMembers: 4 },
  { household: "Vivek Saikia", district: "Dibrugarh", state: "Assam", familyMembers: 6 },

  { household: "Ananya Sinha", district: "Patna", state: "Bihar", familyMembers: 5 },
  { household: "Aman Raj", district: "Gaya", state: "Bihar", familyMembers: 4 },
  { household: "Ritika Kumar", district: "Muzaffarpur", state: "Bihar", familyMembers: 3 },

  { household: "Yash Pandey", district: "Raipur", state: "Chhattisgarh", familyMembers: 6 },
  { household: "Sneha Sahu", district: "Bilaspur", state: "Chhattisgarh", familyMembers: 4 },
  { household: "Kunal Verma", district: "Durg", state: "Chhattisgarh", familyMembers: 5 },

  { household: "Diya Naik", district: "North Goa", state: "Goa", familyMembers: 4 },
  { household: "Rohan Dsouza", district: "South Goa", state: "Goa", familyMembers: 3 },

  { household: "Parth Patel", district: "Ahmedabad", state: "Gujarat", familyMembers: 6 },
  { household: "Isha Shah", district: "Surat", state: "Gujarat", familyMembers: 4 },
  { household: "Nirav Desai", district: "Vadodara", state: "Gujarat", familyMembers: 5 },

  { household: "Simran Kaur", district: "Gurugram", state: "Haryana", familyMembers: 4 },
  { household: "Arjun Malik", district: "Faridabad", state: "Haryana", familyMembers: 5 },
  { household: "Komal Dahiya", district: "Hisar", state: "Haryana", familyMembers: 3 },

  { household: "Anshul Thakur", district: "Shimla", state: "Himachal Pradesh", familyMembers: 4 },
  { household: "Pooja Rana", district: "Kangra", state: "Himachal Pradesh", familyMembers: 5 },
  { household: "Kritika Verma", district: "Mandi", state: "Himachal Pradesh", familyMembers: 3 },

  { household: "Nikhil Soren", district: "Ranchi", state: "Jharkhand", familyMembers: 6 },
  { household: "Prerna Roy", district: "Dhanbad", state: "Jharkhand", familyMembers: 4 },
  { household: "Vikas Singh", district: "East Singhbhum", state: "Jharkhand", familyMembers: 5 },

  { household: "Manjunath Gowda", district: "Bengaluru Urban", state: "Karnataka", familyMembers: 5 },
  { household: "Kavya Rao", district: "Mysuru", state: "Karnataka", familyMembers: 4 },
  { household: "Roshan Shetty", district: "Dakshina Kannada", state: "Karnataka", familyMembers: 6 },

  { household: "Arun Nair", district: "Thiruvananthapuram", state: "Kerala", familyMembers: 4 },
  { household: "Lakshmi Menon", district: "Ernakulam", state: "Kerala", familyMembers: 5 },
  { household: "Faizal K", district: "Kozhikode", state: "Kerala", familyMembers: 3 },

  { household: "Ishaan Tiwari", district: "Bhopal", state: "Madhya Pradesh", familyMembers: 6 },
  { household: "Anvi Patel", district: "Indore", state: "Madhya Pradesh", familyMembers: 4 },
  { household: "Raghav Joshi", district: "Jabalpur", state: "Madhya Pradesh", familyMembers: 5 },

  { household: "Aditi Kulkarni", district: "Pune", state: "Maharashtra", familyMembers: 4 },
  { household: "Vikram Shinde", district: "Mumbai Suburban", state: "Maharashtra", familyMembers: 5 },
  { household: "Neelam Deshmukh", district: "Nagpur", state: "Maharashtra", familyMembers: 6 },

  { household: "Thangjam Sanjit", district: "Imphal West", state: "Manipur", familyMembers: 5 },
  { household: "Chinglensana Haokip", district: "Churachandpur", state: "Manipur", familyMembers: 4 },
  { household: "Nganbi Devi", district: "Imphal East", state: "Manipur", familyMembers: 3 },

  { household: "Lamphrang Khongwir", district: "East Khasi Hills", state: "Meghalaya", familyMembers: 5 },
  { household: "Prem Marak", district: "West Garo Hills", state: "Meghalaya", familyMembers: 4 },
  { household: "Risa Kharmalki", district: "Ri-Bhoi", state: "Meghalaya", familyMembers: 3 },

  { household: "Lalrinsanga Pachuau", district: "Aizawl", state: "Mizoram", familyMembers: 4 },
  { household: "Malsawmtluanga", district: "Lunglei", state: "Mizoram", familyMembers: 5 },
  { household: "Lalbiakthangi", district: "Champhai", state: "Mizoram", familyMembers: 3 },

  { household: "Imnala Ao", district: "Mokokchung", state: "Nagaland", familyMembers: 5 },
  { household: "Theja Kezo", district: "Kohima", state: "Nagaland", familyMembers: 4 },
  { household: "Lipok Jamir", district: "Tuensang", state: "Nagaland", familyMembers: 3 },

  { household: "Subham Rout", district: "Khordha", state: "Odisha", familyMembers: 6 },
  { household: "Sasmita Pradhan", district: "Cuttack", state: "Odisha", familyMembers: 4 },
  { household: "Bibhu Behera", district: "Ganjam", state: "Odisha", familyMembers: 5 },

  { household: "Harpreet Singh", district: "Amritsar", state: "Punjab", familyMembers: 5 },
  { household: "Gurleen Kaur", district: "Ludhiana", state: "Punjab", familyMembers: 4 },
  { household: "Manjit Dhillon", district: "Jalandhar", state: "Punjab", familyMembers: 3 },

  { household: "Rakesh Choudhary", district: "Jaipur", state: "Rajasthan", familyMembers: 6 },
  { household: "Meera Rathore", district: "Jodhpur", state: "Rajasthan", familyMembers: 4 },
  { household: "Kiran Purohit", district: "Udaipur", state: "Rajasthan", familyMembers: 5 },

  { household: "Kishore Lepcha", district: "Gangtok", state: "Sikkim", familyMembers: 4 },
  { household: "Sonam Bhutia", district: "Namchi", state: "Sikkim", familyMembers: 5 },
  { household: "Pema Sherpa", district: "Gyalshing", state: "Sikkim", familyMembers: 3 },

  { household: "Sridhar Iyer", district: "Chennai", state: "Tamil Nadu", familyMembers: 5 },
  { household: "Divya Subramanian", district: "Coimbatore", state: "Tamil Nadu", familyMembers: 4 },
  { household: "Karthik Raj", district: "Madurai", state: "Tamil Nadu", familyMembers: 6 },

  { household: "Sai Teja", district: "Hyderabad", state: "Telangana", familyMembers: 4 },
  { household: "Niharika R", district: "Warangal", state: "Telangana", familyMembers: 5 },
  { household: "Akash Reddy", district: "Nizamabad", state: "Telangana", familyMembers: 3 },

  { household: "Bikram Saha", district: "West Tripura", state: "Tripura", familyMembers: 5 },
  { household: "Ritu Debbarma", district: "Dhalai", state: "Tripura", familyMembers: 4 },
  { household: "Subhra Paul", district: "Gomati", state: "Tripura", familyMembers: 3 },

  { household: "Aman Srivastava", district: "Lucknow", state: "Uttar Pradesh", familyMembers: 6 },
  { household: "Poonam Gupta", district: "Kanpur Nagar", state: "Uttar Pradesh", familyMembers: 5 },
  { household: "Ravi Yadav", district: "Varanasi", state: "Uttar Pradesh", familyMembers: 4 },

  { household: "Deepak Rawat", district: "Dehradun", state: "Uttarakhand", familyMembers: 5 },
  { household: "Neha Bisht", district: "Haridwar", state: "Uttarakhand", familyMembers: 4 },
  { household: "Vikas Joshi", district: "Nainital", state: "Uttarakhand", familyMembers: 3 },

  { household: "Sourav Ghosh", district: "Kolkata", state: "West Bengal", familyMembers: 5 },
  { household: "Ankita Roy", district: "North 24 Parganas", state: "West Bengal", familyMembers: 4 },
  { household: "Arko Sen", district: "Darjeeling", state: "West Bengal", familyMembers: 3 },

  { household: "Samuel Henry", district: "South Andaman", state: "Andaman and Nicobar Islands", familyMembers: 4 },
  { household: "Rita Paul", district: "North and Middle Andaman", state: "Andaman and Nicobar Islands", familyMembers: 5 },
  { household: "Immanuel John", district: "Nicobar", state: "Andaman and Nicobar Islands", familyMembers: 3 },

  { household: "Rakesh Kumar", district: "Chandigarh", state: "Chandigarh", familyMembers: 4 },

  { household: "Hitesh Patel", district: "Dadra and Nagar Haveli", state: "Dadra and Nagar Haveli and Daman and Diu", familyMembers: 5 },
  { household: "Mithila Joshi", district: "Daman", state: "Dadra and Nagar Haveli and Daman and Diu", familyMembers: 4 },
  { household: "Yusuf Mulla", district: "Diu", state: "Dadra and Nagar Haveli and Daman and Diu", familyMembers: 3 },

  { household: "Arvind Mehta", district: "New Delhi", state: "Delhi", familyMembers: 4 },
  { household: "Sakshi Jain", district: "South Delhi", state: "Delhi", familyMembers: 5 },
  { household: "Mukesh Kumar", district: "North Delhi", state: "Delhi", familyMembers: 3 },

  { household: "Aqib Lone", district: "Srinagar", state: "Jammu and Kashmir", familyMembers: 5 },
  { household: "Pawan Sharma", district: "Jammu", state: "Jammu and Kashmir", familyMembers: 4 },
  { household: "Nasir Ahmad", district: "Baramulla", state: "Jammu and Kashmir", familyMembers: 3 },

  { household: "Tsering Namgyal", district: "Leh", state: "Ladakh", familyMembers: 4 },
  { household: "Stanzin Dorjay", district: "Kargil", state: "Ladakh", familyMembers: 5 },

  { household: "Muhsin Koya", district: "Lakshadweep", state: "Lakshadweep", familyMembers: 4 },

  { household: "Sivakumar", district: "Puducherry", state: "Puducherry", familyMembers: 5 },
  { household: "Gireesh", district: "Karaikal", state: "Puducherry", familyMembers: 4 },
  { household: "Rohit Menon", district: "Mahe", state: "Puducherry", familyMembers: 3 },
  { household: "Ravi Teja", district: "Yanam", state: "Puducherry", familyMembers: 4 }

)

  const stateDistrictMap = {};
lodData.forEach(entry => {
  let state = entry.state || '';
  let district = entry.district || '';
  if (!stateDistrictMap[state]) stateDistrictMap[state] = new Set();
  if (district) stateDistrictMap[state].add(district);
});
  
let stateSelect = document.getElementById('stateFilter');
let districtSelect = document.getElementById('districtFilter');
wrongPasswordCount = localStorage.getItem('wrongpss') || 1;

if (stateSelect) {
  stateSelect.innerHTML = '<option value="">All States</option>';
  Object.keys(stateDistrictMap).forEach(state => {
    const opt = document.createElement('option');
    opt.value = state;
    opt.textContent = state;
    stateSelect.appendChild(opt);
  });
}
function updateDistrictOptions() {
  const selectedState = stateSelect ? stateSelect.value : '';
  districtSelect.innerHTML = '<option value="">All Districts</option>';
  if (selectedState && stateDistrictMap[selectedState]) {
    Array.from(stateDistrictMap[selectedState])
      .sort()
      .forEach(district => {
        const opt = document.createElement('option');
        opt.value = district;
        opt.textContent = district;
        districtSelect.appendChild(opt);
      });
  }
}

function crossclick() {
  document.querySelector('.alertmsg').style.display = 'none';
}

function btnclick() {
  const userName = document.querySelector('#userName').value;
  const password = document.getElementById('password').value;
  const logmsg = document.getElementById('logmsg');

  if (userName === 'admin' && password === '123') {
    logmsg.innerText = '✅ Login successful';
    logmsg.style.color = 'green';
    setTimeout(() => document.querySelector('.login-page').style.display = 'none', 1000);
    document.querySelector('.loader').style.display = 'flex';
    setTimeout(() => document.querySelector('.loader').style.display = 'none', 6000);
    document.querySelector('.container').style.display = 'flex';
    countin();
  } else {
    logmsg.innerText = '❌ Wrong Username or Password';
    logmsg.style.color = 'red';
    wrongPasswordCount++;
    localStorage.setItem('wrongpss', wrongPasswordCount);
    alert(wrongPasswordCount);
    location.reload();
  }
  
}

function renderTable(data) {
  const container = document.querySelector('.tablea');
  if (!container) return;

 
  let html = `
    <table>
      <tr>
        <th>Household Head Name</th>
        <th>District</th>
        <th>State</th>
        <th>No of Members</th>
      </tr>
  `;

  let total = 0;
  data.forEach(item => {
    const members = parseInt(item.familyMembers) || 0;
    total += members;

   
    const hh = String(item.household || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const dist = String(item.district || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const st = String(item.state || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    html += `
      <tr>
        <td class="trrr">${hh}</td>
        <td class="trrr">${dist}</td>
        <td class="trrr">${st}</td>
        <td class="trrr">${members}</td>
      </tr>
    `;
  });

  html += `</table>`;
  container.innerHTML = html;

 
  const totalCount = document.getElementById('totalCount');
  if (totalCount) totalCount.innerText = total;
}


      
  console.log(lodData)
 let tableBlock=` <table>
          <tr>
            <th>Household Head Name</th>
            <th class="thdc">District</th>
            <th>State</th>
            <th class="thdc">No of members in family</th>
          </tr>
          
        `;
       function countin() {
  let cou = 0; 
  let totalCount = document.querySelector('#totalCount');

  for (let i = 0; i < lodData.length; i++) {
    cou += parseInt(lodData[i].familyMembers); 
  }

  totalCount.innerText = cou;
}

       console.log(typeof(lodData.familyMembers));
        
  for(let i=0 ; i<lodData.length;i++){
    tableBlock+=`
          <tr>
            <td class="trrr">${lodData[i].household}</td>
            <td class="trrr">${lodData[i].district}</td>
            <td class="trrr">${lodData[i].state}</td>
            <td class="trrr">${lodData[i].familyMembers}</td>
          </tr>
          `;
  }
  tableBlock+=`</table>`
  document.querySelector('.tablea').innerHTML=tableBlock;
if (wrongPasswordCount > 5) {
  alert('Your password attempts are over');
  document.getElementById('loginbtn').style.display = 'none';
  document.getElementById('userName').style.display = 'none';
  document.getElementById('password').style.display = 'none';
  document.getElementById('tokeninp').style.display = 'block';
  document.getElementById('toenbtn').style.display = 'inline';
}
 
function tokbtn() {
  const token = document.getElementById('tokeninp').value;
  if (token === 'abc') {
    alert('Token validation successful');
    wrongPasswordCount = 1;
    localStorage.setItem('wrongpss', wrongPasswordCount);
    location.reload();
  } else {
    alert('Validation failed');
  }
}
function filterData() {
  const selectedState = stateSelect ? stateSelect.value : '';
  const selectedDistrict = districtSelect ? districtSelect.value : '';

  const filtered = lodData.filter(item => {
    const stateMatch = !selectedState || item.state === selectedState;
    const districtMatch = !selectedDistrict || item.district === selectedDistrict;
    return stateMatch && districtMatch;
  });

  renderTable(filtered);
}
if (stateSelect) {
  stateSelect.addEventListener('change', () => {
    updateDistrictOptions();
    filterData();
  });
}

if (districtSelect) {
  districtSelect.addEventListener('change', filterData);
}


renderTable(lodData);