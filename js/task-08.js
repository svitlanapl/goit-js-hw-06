const formEl = document.querySelector('.login-form');
// console.log(formEl);


formEl.addEventListener('submit', event => {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget;

    const emailVal = email.value;
    const passwordVal = password.value;

    if (emailVal === '' || passwordVal === '') {
        return alert('Please fill in all the fields!');
    }
    const userDetails = { email: emailVal, Password: passwordVal }

    console.log(userDetails);
    event.currentTarget.reset();
})
