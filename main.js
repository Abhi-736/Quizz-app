

/* let question = document.getElementById("question")
let aa = document.getElementById("a_text");
let bb = document.getElementById("b_text");
let cc = document.getElementById("c_text");
let dd = document.getElementById("d_text");
let submit = document.getElementById("submit");
let ans;
let count = 0;
/* function Quiz(data) {
    question.innerText = (`${data[count].question}`)
    aa.innerHTML = (`${data[count].optionA}`);
    bb.innerHTML = (`${data[count].optionB}`);
    cc.innerHTML = (`${data[count].optionC}`);
    dd.innerHTML = (`${data[count].optionD}`); */
/* function incquiz() {
    fetch('questions.json')
        .then((value) => value.json())
        .then(data => {
            question.innerText = (`${data[count].question}`)
            aa.innerHTML = (`${data[count].optionA}`);
            bb.innerHTML = (`${data[count].optionB}`);
            cc.innerHTML = (`${data[count].optionC}`);
            dd.innerHTML = (`${data[count].optionD}`);
           gotSelected()
        })
} incquiz();
function gotSelected() {
    const answer = document.querySelectorAll('.answer');
console.log(answer);
    let cans;
    answer.forEach((answer) => {
        if (answer.checked) { cans = `${answer.id}${answer.id}`.innerHTML };
    console.log(cans)}); return cans;
};
submit.addEventListener("click", () => {
    if (gotSelected()) {
        incquiz()
        ; count++;}})
  */
        const quiz = document.getElementById("quiz");
        const answerEls = document.querySelectorAll(".answer");
        const questionEl = document.getElementById("question");
        const a_text = document.getElementById("a_text");
        const b_text = document.getElementById("b_text");
        const c_text = document.getElementById("c_text");
        const d_text = document.getElementById("d_text");
        const submitBtn = document.getElementById("submit");
        
        let currentQuiz = 0;
        let score = 0;
        
        loadQuiz();
        
        function loadQuiz() {
            deselectAnswers();
            fetch('questions.json')
            .then((value) => value.json())
            .then(Qdata => {
            const currentQuizData = Qdata[currentQuiz];
        
            questionEl.innerText = currentQuizData.question;
            a_text.innerText = currentQuizData.a;
            b_text.innerText = currentQuizData.b;
            c_text.innerText = currentQuizData.c;
            d_text.innerText = currentQuizData.d;
        })}
        
        function getSelected() {
            let answer = undefined;
        
            answerEls.forEach((answerEl) => {
                if (answerEl.checked) {
                    answer = answerEl.id;
                }
            });
        
            return answer;
        }
        
        function deselectAnswers() {
            answerEls.forEach((answerEl) => {
                answerEl.checked = false;
            });
        }
        
        submitBtn.addEventListener("click", () => {
            // check to see the answer 
            const answer = getSelected();
            fetch('questions.json')
            .then((value) => value.json())
            .then(Qdata => {
            if (answer) {
                if (answer === Qdata[currentQuiz].answer) {
                    score++;
                }
        
                currentQuiz++;
                if (currentQuiz < Qdata.length) {
                    loadQuiz();
                } else {
                    quiz.innerHTML = `
                        <h2>You answered correctly at ${score}/${Qdata.length} questions.</h2>
                        
                        <button onclick="location.reload()">Reload</button>
                    `;
                }
            }})
        });