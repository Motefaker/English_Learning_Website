const isLoggedIn = localStorage.getItem('isLoggedIn') === 'ture';
console.log(isLoggedIn);


const form = document.querySelector('form');
if (!form) {
  console.error("Form not found!");
}

const storedData = localStorage.getItem('formData');
const obj = JSON.parse(storedData);


// Welcoming the User.
const header = document.querySelector('h1');

if (header) {
  header.textContent = `Hi, ${obj.fName}! `;
}
else {
  console.warn("Header element not found!");
}

const selectElements = form.querySelectorAll('select');
const numberOfQuestions = selectElements.length;

// The correct answers for the questions
const correctAnswers = {
  answers: [
    select1 = "'m",
    select2 = "'s",
    select3 = "'re not",
    select4 = "isn't",
    select5 = "are you",
    select6 = "we are",

  ]
};

// An object for user results
const userResults = {
  //firstName: obj.fName,
  //lastName: obj.lName,
  rightAnswers: 0,
  falseAnswers: 0,
  score: 0,
  numberOfQuestions: form.querySelectorAll('select').length,
}


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userAnswers = Array.from(selectElements).map(select => select.options[select.selectedIndex]?.value || "blank");
  console.log(userAnswers);

  if (userAnswers.includes("blank")) {
    alert("Please answer all of the questions before submitting.");
    return;
  }

  for (let i = 0; i < numberOfQuestions; i++) {
    if (`${userAnswers[i]}` === `${correctAnswers.answers[i]}`) {
      userResults.rightAnswers++;
      userResults.score++;
      console.log(userResults.score);
    }
    else {
      userResults.falseAnswers++;
    }
  }
  const json = JSON.stringify(userResults);
  localStorage.setItem('form', json);

  window.location.href = "/pages/result.html";
});


