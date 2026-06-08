const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);

    if (obj.fName == '' || obj.lName == '') {
        alert("You have to enter your first name and last name!");
        return;
    };

    localStorage.setItem('formData', JSON.stringify(obj));

    window.location.href = "/pages/quiz-session.html";
});