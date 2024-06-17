document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;

    if (!email || !password) {
        alert('No fields are to be left empty')
        return;
    }
    const formData = {
        email: email,
        password: password
    };
    console.log(formData);
    form.reset();
});
