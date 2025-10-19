
let lodData=  JSON.parse(localStorage.getItem('censusList')) 
lodData.push(
  { household: "Kavya R", district: "Bengaluru Rural", state: "Karnataka", familyMembers: 4 },
  { household: "Ramesh Naik", district: "Mysuru", state: "Karnataka", familyMembers: 6 },
  { household: "Shweta Shetty", district: "Dakshina Kannada", state: "Karnataka", familyMembers: 3 },
  { household: "Prakash Hegde", district: "Udupi", state: "Karnataka", familyMembers: 5 },
  { household: "Asha Kumari", district: "Shivamogga", state: "Karnataka", familyMembers: 4 },
  { household: "Nandini Rao", district: "Chikkamagaluru", state: "Karnataka", familyMembers: 3 },
  { household: "Santosh Kulkarni", district: "Hassan", state: "Karnataka", familyMembers: 6 },
  { household: "Deepa Bhat", district: "Kodagu", state: "Karnataka", familyMembers: 2 },
  { household: "Kiran Shetty", district: "Mandya", state: "Karnataka", familyMembers: 5 },
  { household: "Anitha Gowda", district: "Tumakuru", state: "Karnataka", familyMembers: 4 },
  { household: "Mahesh Patil", district: "Chitradurga", state: "Karnataka", familyMembers: 7 },
  { household: "Suresh Bhat", district: "Davanagere", state: "Karnataka", familyMembers: 3 },
  { household: "Lakshmi Devi", district: "Ballari", state: "Karnataka", familyMembers: 6 },
  { household: "Harish R", district: "Koppal", state: "Karnataka", familyMembers: 5 },
  { household: "Pooja S", district: "Raichur", state: "Karnataka", familyMembers: 3 },
  { household: "Vinay Kumar", district: "Kalaburagi", state: "Karnataka", familyMembers: 4 },
  { household: "Megha Joshi", district: "Yadgir", state: "Karnataka", familyMembers: 5 },
  { household: "Vivek Desai", district: "Bidar", state: "Karnataka", familyMembers: 6 },
  { household: "Priya Nayak", district: "Vijayapura", state: "Karnataka", familyMembers: 3 },
  { household: "Ashok Kulal", district: "Bagalkote", state: "Karnataka", familyMembers: 4 },
  { household: "Reshma Dsouza", district: "Belagavi", state: "Karnataka", familyMembers: 5 },
  { household: "Yogesh Hiremath", district: "Dharwad", state: "Karnataka", familyMembers: 6 },
  { household: "Chaitra H", district: "Gadag", state: "Karnataka", familyMembers: 3 },
  { household: "Raghavendra B", district: "Haveri", state: "Karnataka", familyMembers: 5 },
  { household: "Namrata Hegde", district: "Uttara Kannada", state: "Karnataka", familyMembers: 4 },
  { household: "Sharath M", district: "Chikkaballapur", state: "Karnataka", familyMembers: 6 },
  { household: "Sindhu K", district: "Kolar", state: "Karnataka", familyMembers: 3 },
  { household: "Rohit Rao", district: "Ramanagara", state: "Karnataka", familyMembers: 5 },
  { household: "Bhavya P", district: "Chamarajanagar", state: "Karnataka", familyMembers: 4 },
  { household: "Guruprasad S", district: "Bengaluru Urban", state: "Karnataka", familyMembers: 7 },
  { household: "Neha Patil", district: "Bengaluru Rural", state: "Karnataka", familyMembers: 2 },
  { household: "Sanjay Acharya", district: "Mysuru", state: "Karnataka", familyMembers: 5 },
  { household: "Padmini Shetty", district: "Dakshina Kannada", state: "Karnataka", familyMembers: 4 },
  { household: "Chirag Hegde", district: "Udupi", state: "Karnataka", familyMembers: 6 },
  { household: "Kusuma T", district: "Shivamogga", state: "Karnataka", familyMembers: 3 },
  { household: "Arjun M", district: "Chikkamagaluru", state: "Karnataka", familyMembers: 5 },
  { household: "Divya S", district: "Hassan", state: "Karnataka", familyMembers: 4 },
  { household: "Pradeep K", district: "Kodagu", state: "Karnataka", familyMembers: 6 },
  { household: "Aishwarya N", district: "Mandya", state: "Karnataka", familyMembers: 3 },
  { household: "Ravi Kumar", district: "Tumakuru", state: "Karnataka", familyMembers: 5 },
  { household: "Sudha R", district: "Chitradurga", state: "Karnataka", familyMembers: 4 },
  { household: "Krishna Murthy", district: "Davanagere", state: "Karnataka", familyMembers: 7 },
  { household: "Poornima H", district: "Ballari", state: "Karnataka", familyMembers: 3 },
  { household: "Ajay Nayak", district: "Koppal", state: "Karnataka", familyMembers: 4 },
  { household: "Geetha L", district: "Raichur", state: "Karnataka", familyMembers: 6 },
  { household: "Sharanya V", district: "Kalaburagi", state: "Karnataka", familyMembers: 3 },
  { household: "Naveen G", district: "Yadgir", state: "Karnataka", familyMembers: 5 },
  { household: "Ritika R", district: "Bidar", state: "Karnataka", familyMembers: 4 },
  { household: "Mohan Pujar", district: "Vijayapura", state: "Karnataka", familyMembers: 6 },
  { household: "Sneha Kulkarni", district: "Bagalkote", state: "Karnataka", familyMembers: 5 },
  { household: "Shankar Patil", district: "Belagavi", state: "Karnataka", familyMembers: 3 },
  { household: "Varsha D", district: "Dharwad", state: "Karnataka", familyMembers: 5 },
  { household: "Harini J", district: "Gadag", state: "Karnataka", familyMembers: 4 },
  { household: "Srinivas B", district: "Haveri", state: "Karnataka", familyMembers: 6 },
  { household: "Deeksha Nayak", district: "Uttara Kannada", state: "Karnataka", familyMembers: 3 },
  { household: "Karthik R", district: "Chikkaballapur", state: "Karnataka", familyMembers: 5 },
  { household: "Anupama K", district: "Kolar", state: "Karnataka", familyMembers: 4 },
  { household: "Tejaswini S", district: "Ramanagara", state: "Karnataka", familyMembers: 6 },
  { household: "Rudresh H", district: "Chamarajanagar", state: "Karnataka", familyMembers: 5 },
  { household: "Meera Pai", district: "Bengaluru Urban", state: "Karnataka", familyMembers: 3 },
  { household: "Sudeep M", district: "Bengaluru Rural", state: "Karnataka", familyMembers: 4 },
  { household: "Vasudha K", district: "Mysuru", state: "Karnataka", familyMembers: 5 },
  { household: "Roshan Dsouza", district: "Dakshina Kannada", state: "Karnataka", familyMembers: 6 },
  { household: "Shobha Hegde", district: "Udupi", state: "Karnataka", familyMembers: 3 },
  { household: "Tarun Shetty", district: "Shivamogga", state: "Karnataka", familyMembers: 5 },
  { household: "Bindu R", district: "Chikkamagaluru", state: "Karnataka", familyMembers: 4 },
  { household: "Nikhil K", district: "Hassan", state: "Karnataka", familyMembers: 6 },
  { household: "Anita P", district: "Kodagu", state: "Karnataka", familyMembers: 2 },
  { household: "Umesh M", district: "Mandya", state: "Karnataka", familyMembers: 5 },
  { household: "Gowri S", district: "Tumakuru", state: "Karnataka", familyMembers: 4 },
  { household: "Darshan V", district: "Chitradurga", state: "Karnataka", familyMembers: 6 },
  { household: "Madhuri N", district: "Davanagere", state: "Karnataka", familyMembers: 3 },
  { household: "Prem Chand", district: "Ballari", state: "Karnataka", familyMembers: 5 },
  { household: "Seema J", district: "Koppal", state: "Karnataka", familyMembers: 4 },
  { household: "Lokesha T", district: "Raichur", state: "Karnataka", familyMembers: 6 },
  { household: "Pavitra R", district: "Kalaburagi", state: "Karnataka", familyMembers: 3 },
  { household: "Imran Khan", district: "Yadgir", state: "Karnataka", familyMembers: 7 },
  { household: "Farzana B", district: "Bidar", state: "Karnataka", familyMembers: 4 },
  { household: "Raghav P", district: "Vijayapura", state: "Karnataka", familyMembers: 5 },
  { household: "Vishal Sutar", district: "Bagalkote", state: "Karnataka", familyMembers: 6 },
  { household: "Jyothi Patil", district: "Belagavi", state: "Karnataka", familyMembers: 3 },
  { household: "Sahana K", district: "Dharwad", state: "Karnataka", familyMembers: 5 },
  { household: "Raviteja H", district: "Gadag", state: "Karnataka", familyMembers: 4 },
  { household: "Shruthi M", district: "Haveri", state: "Karnataka", familyMembers: 6 },
  { household: "Chethan R", district: "Uttara Kannada", state: "Karnataka", familyMembers: 5 },
  { household: "Sowmya N", district: "Chikkaballapur", state: "Karnataka", familyMembers: 3 },
  { household: "Pranav K", district: "Kolar", state: "Karnataka", familyMembers: 4 },
  { household: "Harsha V", district: "Ramanagara", state: "Karnataka", familyMembers: 6 },
  { household: "Roopa S", district: "Chamarajanagar", state: "Karnataka", familyMembers: 4 },
  { household: "Girish H", district: "Bengaluru Urban", state: "Karnataka", familyMembers: 5 },
  { household: "Akhila P", district: "Bengaluru Rural", state: "Karnataka", familyMembers: 3 },
  { household: "Bharath B", district: "Mysuru", state: "Karnataka", familyMembers: 5 },
  { household: "Navya Shetty", district: "Dakshina Kannada", state: "Karnataka", familyMembers: 4 },
  { household: "Sandeep Hegde", district: "Udupi", state: "Karnataka", familyMembers: 6 },
  { household: "Keerthi S", district: "Shivamogga", state: "Karnataka", familyMembers: 2 },
  { household: "Pavan R", district: "Chikkamagaluru", state: "Karnataka", familyMembers: 5 },
  { household: "Veena K", district: "Hassan", state: "Karnataka", familyMembers: 4 },
  { household: "Uday Kumar", district: "Kodagu", state: "Karnataka", familyMembers: 6 },
  { household: "Smitha L", district: "Mandya", state: "Karnataka", familyMembers: 3 },
  { household: "Yashaswini M", district: "Tumakuru", state: "Karnataka", familyMembers: 5 },
  { household: "Arpitha S", district: "Chitradurga", state: "Karnataka", familyMembers: 4 },
  { household: "Mohanraj K", district: "Davanagere", state: "Karnataka", familyMembers: 6 },
  { household: "Hemalatha N", district: "Ballari", state: "Karnataka", familyMembers: 3 },
  { household: "Rajeshwari P", district: "Koppal", state: "Karnataka", familyMembers: 5 },
  { household: "Zubair A", district: "Raichur", state: "Karnataka", familyMembers: 7 },
  { household: "Safiya S", district: "Kalaburagi", state: "Karnataka", familyMembers: 4 },
  { household: "Mahima R", district: "Yadgir", state: "Karnataka", familyMembers: 3 },
  { household: "Gautam D", district: "Bidar", state: "Karnataka", familyMembers: 5 },
  { household: "Triveni K", district: "Vijayapura", state: "Karnataka", familyMembers: 4 },
  { household: "Prajwal S", district: "Bagalkote", state: "Karnataka", familyMembers: 6 },
  { household: "Nikhita P", district: "Belagavi", state: "Karnataka", familyMembers: 5 },
  { household: "Vighnesh H", district: "Dharwad", state: "Karnataka", familyMembers: 3 },
  { household: "Lavanya J", district: "Gadag", state: "Karnataka", familyMembers: 5 },
  { household: "Aditya K", district: "Haveri", state: "Karnataka", familyMembers: 4 },
  { household: "Mithun Rai", district: "Uttara Kannada", state: "Karnataka", familyMembers: 6 },
  { household: "Radha S", district: "Chikkaballapur", state: "Karnataka", familyMembers: 4 },
  { household: "Shashank V", district: "Kolar", state: "Karnataka", familyMembers: 5 },
  { household: "Pallavi H", district: "Ramanagara", state: "Karnataka", familyMembers: 3 },
  { household: "Chethana R", district: "Chamarajanagar", state: "Karnataka", familyMembers: 5 })

  

wrongPasswordCount = localStorage.getItem('wrongpss') || 1;

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
    setTimeout(() => document.querySelector('.login-page').style.display = 'none', 3000);
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
