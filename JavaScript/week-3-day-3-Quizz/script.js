const questions = [
  {
    question: "Quel est le plus haut sommet de la Guinnée ?",
    choices: ["Kilimandjaro", "Gangan", "Kakoulima", "Nimba"],
    correctAnswer: 3,
  },
  {
    question: "Quel est la langue officielle  de la Guinnée ",
    choices: ["Espagnol", "Anglais", "Français"],
    correctAnswer: 2,
  },
  {
    question: "Quel est le fleuve principal qui prend sa source en Guinnée ",
    choices: ["Le Niger", "Le Nil", "Le Senegan", "Le congo"],
    correctAnswer: 0,
  },
  {
    question: "Quel est la capitale de la Guinnée ",
    choices: ["Conakry", "Kankan", "Kindia"],
    correctAnswer: 0,
  },
  {
    question: "En Quel Année la Guinnée a eu son Indépendance ?",
    choices: [1960, 1958],
    correctAnswer: 1,
  },
];

const choicesEl = document.getElementById("choices");
const questionEL = document.getElementById("question");
const submitBtn = document.getElementById("submit-button");
const TimerEl=document.getElementById("time-left")

let currentQuestion = 0;
let instervalId=0;

function loadQuestion() {
  const question = questions[currentQuestion];
  questionEL.textContent = question.question;

  question.choices.forEach(function (choice, index) {
    // console.log(choice,index);
    const btn = document.createElement("button");
    btn.classList.add("choice");

    btn.textContent = choice;
    btn.setAttribute("data-index",index)

    btn.addEventListener("click", selectAnswer2);

    choicesEl.append(btn);
  });

  startTimer()
}

function selectAnswer(choiceId) {
  // console.log(choicesEl.children[choiceId]);
  for (const element of choicesEl.children) {
    element.classList.remove("selected");
  }
  choicesEl.children[choiceId].classList.add("selected");
}
function selectAnswer2(event) {
  for (const element of choicesEl.children) {
    element.classList.remove("selected");
  }

  event.target.classList.add("selected");

  const audio= new Audio("my.mp3")

  audio.play()

}

function checkAnswer() {
//    submitBtn.style.width="400px";
    const userChoice = document.querySelector(".selected");

    if(userChoice===null) return ;
    clearInterval(instervalId)
    submitBtn.style.display="none"
    const indexAnswer=Number(userChoice.getAttribute('data-index'))
    const question=questions[currentQuestion]
    const correctAnswerIndex=question.correctAnswer;
    if (indexAnswer===correctAnswerIndex) {
        userChoice.style.backgroundColor="green"; 
    }
    else{
        userChoice.style.backgroundColor="red"; 
        choicesEl.children[correctAnswerIndex].style.backgroundColor="green"
    }

    setTimeout(nextQuestions,2000)
}

function nextQuestions() {
    submitBtn.style.display="block"
    currentQuestion++
    if (currentQuestion<questions.length) {
        choicesEl.innerHTML=''
        loadQuestion()
    }
   
    
    
 
}

function displaResults(){

}

function startTimer(){
    let counter=20;
    TimerEl.textContent="Temps Restant : "+ counter +"s"
    instervalId= setInterval(()=>{
        counter--;
        TimerEl.textContent="Temps Restant : "+ counter +"s"

        if (counter<=0) {
            clearInterval(instervalId)
            TimerEl.textContent=''
        }
    },1000)

 
}

function main() {
  loadQuestion();
  submitBtn.addEventListener("click", checkAnswer);
}

main();
