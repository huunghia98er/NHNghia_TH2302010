let password = document.getElementById('password');
let showEye = document.getElementById('showEye');
let hideEye = document.getElementById('hideEye');
let logPage = document.getElementById('log')
let regPage = document.getElementById('reg')



showEye.addEventListener('click', function() {
    password.type = 'text';
    showEye.style.display= "none";
    hideEye.style.display= "inline";
    password.focus();
})

hideEye.addEventListener('click', function() {
    password.type = 'password';
    showEye.style.display= "inline";
    hideEye.style.display= "none";
    password.focus();
})

regPage.addEventListener('click', function() {
    document.getElementById('login').style.display = 'none'
    document.getElementById('row4').style.display = 'none'
    document.getElementById('register').style.display = 'block'
    document.getElementById('reg').style.backgroundColor = '#fff'
    document.getElementById('log').style.backgroundColor = 'rgb(238, 232, 229)'
})

logPage.addEventListener('click', function() {
    document.getElementById('login').style.display = 'block'
    document.getElementById('row4').style.display = 'block'
    document.getElementById('register').style.display = 'none'
    document.getElementById('log').style.backgroundColor = '#fff'
    document.getElementById('reg').style.backgroundColor = 'rgb(238, 232, 229)'
})