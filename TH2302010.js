let password = document.getElementById('logpassword');
let showEye = document.getElementById('showEye');
let hideEye = document.getElementById('hideEye');
let logPage = document.getElementById('log');
let regPage = document.getElementById('reg');
let submit = document.getElementById('submit');
let regAcc = document.getElementById('regAccount');
let logEmail = document.getElementById('logemail');
let logPass = document.getElementById('logpassword');
let account = (localStorage.getItem('Accounts_List') !== null) ? JSON.parse(localStorage.getItem('Accounts_List')) : []

var component = function (){
    function checkAccount(acc) {
        let rp_LogMail = document.getElementById('reportLogMail')
        let rp_LogPass = document.getElementById('reportLogPass')
        for (let i = 0; i < acc.length; i++) {
            if (!logEmail.value.includes('@')) {
                rp_LogMail.innerHTML = 'Invalid email address!'
                rp_LogMail.style.display = 'block'
            } else if (logEmail.value !== acc[i].email) {
                rp_LogMail.innerHTML = 'Account does not exist!'
                rp_LogMail.style.display = 'block'
            } else {
                rp_LogMail.style.display = 'none'
            }
            if (logPass.value !== acc[i].password) {
                rp_LogPass.innerHTML = 'Wrong Password!'
                rp_LogPass.style.display = 'block'
            } else {
                rp_LogPass.style.display = 'none'
            }
            if (logEmail.value === acc[i].email && logPass.value === acc[i].password) {
                alert('Login Successfully!')
            }
        }
    }

    function validateInfor() {
        if (account.length > 0){
            checkAccount(account)
        } else {
            alert('Tai khoan chua duoc dang ky!')
        }
    }

    var action = function() {
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

        submit.addEventListener('click', function() {
            validateInfor()
        })

        regAcc.addEventListener('click', function() {
            let regMail = document.getElementById('regemail')
            let rppass = document.getElementById('reportPass')
            let regPass1 = document.getElementById('regpassword1')
            let regPass2 = document.getElementById('regpassword2')
            let rpmail = document.getElementById('reportMail')
            if (!regMail.value.includes('@')) {
                rpmail.innerHTML = 'Invalid email address!'
                rpmail.style.display = 'block'
            } else {
                rpmail.style.display = 'none'
            }
            if (regPass1.value !== regPass2.value) {
                rppass.innerHTML = 'Password incorrect!'
                rppass.style.display = 'block'
            } else {
                rppass.style.display = 'none'
            }
            if (regMail.value.includes('@') && regPass1.value === regPass2.value) {
                rpmail.style.display = 'none'
                rppass.style.display = 'none'
                let logAcc = {
                    email: regMail.value,
                    password: regPass1.value
                }
                account.push(logAcc)
                localStorage.setItem('Accounts_List', JSON.stringify(account))
                alert('SignIn Successfully!')
            }
        })
    }

    return {
        init : function(){
            action();
        }
    }
}();

document.addEventListener('DOMContentLoaded', function (){component.init()});
