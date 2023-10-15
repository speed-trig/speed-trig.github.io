
class Question{

    constructor(angle, answer){

        this.angle = angle
        this.answer = answer

    }


}


const sinQuestions = [
    new Question(0, "0"),
    new Question(30, "1/2"),
    new Question(45, "√2/2"),
    new Question(60, "√3/2"),
    new Question(90, "1"),
    new Question(120, "√3/2"),
    new Question(135, "√2/2"),
    new Question(150, "1/2"),
    new Question(180, "0"),
    new Question(210, "-1/2"),
    new Question(225, "-√2/2"),
    new Question(240, "-√3/2"),
    new Question(270, "-1"),
    new Question(300, "-√3/2"),
    new Question(315, "-√2/2"),
    new Question(330, "-1/2")
]

validQuestions = sinQuestions
validAnswers = setAnswers(validQuestions);


function setAnswers(questions){

   let answers = [];

    for(let i = 0; i < questions.length; i++){ 
        answers.push(questions[i].answer) 
    }
    return answers
}

function selectQuestion(){
    return validQuestions[Math.floor(Math.random() * validQuestions.length)]
}

function setButtons(question, answers){

    let possibleAnswers = []

    possibleAnswers.push(question.answer)
    answers = answers.filter(item => !possibleAnswers.includes(item))

    possibleAnswers.push(answers[Math.floor(Math.random() * answers.length)])
    answers = answers.filter(item => !possibleAnswers.includes(item))

    possibleAnswers.push(answers[Math.floor(Math.random() * answers.length)])
    answers = answers.filter(item => !possibleAnswers.includes(item))

    possibleAnswers.push(answers[Math.floor(Math.random() * answers.length)])

    console.log(possibleAnswers)

    for (let i = possibleAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [possibleAnswers[i], possibleAnswers[j]] = [possibleAnswers[j], possibleAnswers[i]];
    }

    


    document.getElementById("button0").innerHTML = possibleAnswers[0]
    document.getElementById("button1").innerHTML = possibleAnswers[1]
    document.getElementById("button2").innerHTML = possibleAnswers[2]
    document.getElementById("button3").innerHTML = possibleAnswers[3]
   
}

function displayQuestion(question)
{   
    let text = "Sin(" + question.angle + ")"
    document.getElementById("question").innerHTML = text
}

let myQuestion = selectQuestion()
setButtons(myQuestion, validAnswers)
displayQuestion(myQuestion)
console.log(myQuestion.answer)


document.getElementById("button0").onclick = function(){

    let buttonAnswer = document.getElementById("button0").textContent
    let correctAnswer = myQuestion.answer

    console.log(buttonAnswer)
    console.log(correctAnswer)

    if(buttonAnswer == correctAnswer){
        document.getElementById("correct").innerHTML = "correct"
    }
    else{
        document.getElementById("correct").innerHTML = "incorrect"
    }
}

document.getElementById("button1").onclick = function(){

    let buttonAnswer = document.getElementById("button1").textContent
    let correctAnswer = myQuestion.answer

    if(buttonAnswer == correctAnswer){
        document.getElementById("correct").innerHTML = "correct"
    }
    else{
        document.getElementById("correct").innerHTML = "incorrect"
    }
}

document.getElementById("button2").onclick = function(){

    let buttonAnswer = document.getElementById("button2").textContent
    let correctAnswer = myQuestion.answer

    if(buttonAnswer == correctAnswer){
        document.getElementById("correct").innerHTML = "correct"
    }
    else{
        document.getElementById("correct").innerHTML = "incorrect"
    }
}

document.getElementById("button3").onclick = function(){

    let buttonAnswer = document.getElementById("button3").textContent
    let correctAnswer = myQuestion.answer



    if(buttonAnswer == correctAnswer){
        document.getElementById("correct").innerHTML = "correct"
    }
    else{
        document.getElementById("correct").innerHTML = "incorrect"
    }
}


document.getElementById("continue").onclick = function(){
    document.getElementById("correct").innerHTML = ""
    myQuestion = selectQuestion()
    setButtons(myQuestion, validAnswers)
    displayQuestion(myQuestion)
    console.log(myQuestion.answer)

}

