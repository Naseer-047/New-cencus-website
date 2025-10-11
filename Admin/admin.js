 wrongPasswordCount= localStorage.getItem('wrongpss') || 0;

function crossclick(){
  document.querySelector('.alertmsg').style.display='none';
}


function btnclick() {
  const userName = document.querySelector('#userName').value;
  const password = document.getElementById('password').value;

  if (userName === 'admin' && password === '123') {
    document.querySelector('logmsg')
    logmsg.innerText='✅Login success full'
    logmsg.style.color='green';
  setTimeout(()=> document.querySelector('.login-page').style.display='none',3000);
 document.querySelector('.loader').style.display='flex';
 setTimeout(()=>document.querySelector('.loader').style.display='none' ,5000);
 document.querySelector('.container').style.display='flex';

  }
  else {
        logmsg.innerText='❌ Wrong Username or Password';
    logmsg.style.color='red';
    wrongPasswordCount++;
    localStorage.setItem('wrongpss',wrongPasswordCount)
    alert(wrongPasswordCount)
     location.reload();
     
  }
}
if(wrongPasswordCount>5){
 
   alert('your password have overed')
   document.getElementById('loginbtn')
   .style.display='none';
   userName.style.display='none'
   password.style.display='none'
   document.getElementById('tokeninp')
   tokeninp.style.display='block'
   let token= tokeninp.value;
   document.getElementById('toenbtn')
   toenbtn.style.display='inline';
      function tokbtn(){
        if (token='abc') {
          alert('token validation successfull')
         wrongPasswordCount=0;
         localStorage.setItem('wrongpss',wrongPasswordCount)
         location.reload();
        }
      }
}

