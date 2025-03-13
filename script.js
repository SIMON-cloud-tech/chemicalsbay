document.getElementById('loginForm').addEventListener('submit', function (event){
    event.preventDefault();
})

function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('passwordInput').value;

    if (username == '' || password == ''){
        alert('Please this fill fields to proceed');
    }else{
        alert('Login successful');
    }
};