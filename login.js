document.getElementById('loginButton').addEventListener('click', function() {
  
//     alert('Login button clicked!');
const pin = document.getElementById('pin').value;
    const number = document.getElementById('Number').value;
    // console.log(pin,number);
    
         if (pin === "12345") {
        window.location.href='.'
    
    } else {
        alert("Invalid PIN");
    }
});
