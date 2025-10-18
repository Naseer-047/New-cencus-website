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
let lodData=  JSON.parse(localStorage.getItem('censusList'))       
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
  let cou = 0; // start from 0
  let totalCount = document.querySelector('#totalCount');

  for (let i = 0; i < lodData.length; i++) {
    cou += parseInt(lodData[i].familyMembers); // add each family's members
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
          </tr>`;
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
