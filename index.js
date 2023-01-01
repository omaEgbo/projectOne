const questionElem = document.querySelector("#question");
const leftListElem = document.querySelector("#left-list");
const rightListElem = document.querySelector("#right-list");
const optionElemList = document.querySelector(".option");
const successAlert = document.querySelector(".success");
const dangerAlert = document.querySelector(".failure");
const submitBtn = document.querySelector("#submit");
const nextBtn = document.querySelector("#another");
const optionOne = document.querySelector("#one");
const optionTwo = document.querySelector("#two");
const optionThree = document.querySelector("#three");
const optionFour = document.querySelector("#four");
// Data javaScript
const questions = [
  {
    question: "Javascript is an _______ language?",
    options: [
      "Object-Oriented",
      "Object-based",
      "Procedural",
      "None of the above",
    ],
    answer: "a",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    options: ["Var", "Let", "Const", "All of the above"],
    answer: "d",
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    options: [
      "getElementById()",
      "If () Else()",
      "addEventListener",
      "for(){}",
    ],
    answer: "a",
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    options: [
      "Throws an error",
      "Ignore the statement",
      "Gives a warning",
      "Disables the DOM",
    ],
    answer: "b",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    options: ["getFix", "windows.alert", "addEventListener", "fire.base"],
    answer: "c",
  },
  {
    question:
      "Which of this variable accepts data that can not be incremented?",
    options: ["const", "var", "let", "constant"],
    answer: "a",
  },
  {
    question:
      "When the switch statement matches the expression with the given labels, how is the comparison done?",
    options: [
      "Both the datatype and the result of the expression are compared.",
      "Only the datatype of the expression is compared.",
      "Only the value expressed is confirmed.",
      "None of the above.",
    ],
    answer: "a",
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    options: ["in", "as in", "exist", "lies"],
    answer: "a",
  },
  {
    question: "What is the use of the <noscript> tag in Javascript?",
    options: [
      "The content are viewed by non javascript based browser",
      "Clears all cookies and cache.",
      "Both a and b",
      "none of the above",
    ],
    answer: "a",
  },
  {
    question:
      "When an operator's value NULL, the datatype returned by the unitary operator is?",
    options: ["Boolean", "Undefined", "object", "Integer"],
    answer: "c",
  },
  {
    question: "What does the Javascript “debugger” statement do?",
    options: [
      "It would act as a break point in the program",
      "It would debug all the error",
      "it would debug all errors in the current scope only",
      "None of the above",
    ],
    answer: "a",
  },
  {
    question:
      "What is the output of the following code snippet? print(NaN === NaN);",
    options: ["True", "False", "Undefined", "Error"],
    answer: "b",
  },
  {
    question:
      "What will be the output of the following code snippet? print(typeof(NaN));",
    options: ["object", "String", "Number", "None of the above"],
    answer: "c",
  },
  {
    question: "What does the ‘toLocateString()’ method do in JS?",
    options: [
      "return a localized string representation of an object",
      "returns a parsed string",
      "returns a localized object representation",
      "None of the above",
    ],
    answer: "a",
  },
  {
    question:
      "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",
    options: [
      "Object serialization",
      "Object encapsulation",
      "object inheritance",
      "none of the above",
    ],
    answer: "a",
  },
];

let currentIndex = 0;

function showCurrentQuestion() {
  let ques = questions[currentIndex];
  questionElem.innerHTML = ques.question;
  optionOne.nextElementSibling.innerHTML = ques.options[0];
  optionTwo.nextElementSibling.innerHTML = ques.options[1];
  optionThree.nextElementSibling.innerHTML = ques.options[2];
  optionFour.nextElementSibling.innerHTML = ques.options[3];
}

submitBtn.addEventListener("click", (e) => {
  let ques = questions[currentIndex];
  const radioElem = document.querySelector("input[type=radio]:checked");
  if (radioElem.value == ques.answer) {
    dangerAlert.style.display = "none";
    successAlert.style.display = "block";
  } else {
    dangerAlert.style.display = "block";
    successAlert.style.display = "none";
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex === questions.length - 1) return;
  currentIndex++;
  showCurrentQuestion();
});

showCurrentQuestion();
