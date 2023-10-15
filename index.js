
class Question{

    constructor(trig, angle, answer){

        this.trig = trig
        this.angle = angle
        this.answer = answer

    }


}


const sinQuestions = [
    new Question("sin", 0, "0"),
    new Question("sin", 30, "1/2"),
    new Question("sin", 45, "√2/2"),
    new Question("sin", 60, "√3/2"),
    new Question("sin", 90, "1"),
    new Question("sin", 120, "√3/2"),
    new Question("sin", 135, "√2/2"),
    new Question("sin", 150, "1/2"),
    new Question("sin", 180, "0"),
    new Question("sin", 210, "-1/2"),
    new Question("sin", 225, "-√2/2"),
    new Question("sin", 240, "-√3/2"),
    new Question("sin", 270, "-1"),
    new Question("sin", 300, "-√3/2"),
    new Question("sin", 315, "-√2/2"),
    new Question("sin", 330, "-1/2")
]

const cosQuestions = [
    new Question("cos", 0, "1"),
    new Question("cos", 30, "√3/2"),
    new Question("cos", 45, "√2/2"),
    new Question("cos", 60, "1/2"),
    new Question("cos", 90, "0"),
    new Question("cos", 120, "-1/2"),
    new Question("cos", 135, "-√2/2"),
    new Question("cos", 150, "-√3/2"),
    new Question("cos", 180, "-1"),
    new Question("cos", 210, "-√3/2"),
    new Question("cos", 225, "-√2/2"),
    new Question("cos", 240, "-1/2"),
    new Question("cos", 270, "0"),
    new Question("cos", 300, "1/2"),
    new Question("cos", 315, "√2/2"),
    new Question("cos", 330, "√3/2")
]

const tanQuestions = [
    new Question("tan", 0, "0"),
    new Question("tan", 30, "√3/3"),
    new Question("tan", 45, "1"),
    new Question("tan", 60, "√3"),
    new Question("tan", 90, "Undefined"),
    new Question("tan", 120, "-√3"),
    new Question("tan", 135, "-1"),
    new Question("tan", 150, "-√3/3"),
    new Question("tan", 180, "0"),
    new Question("tan", 210, "√3/3"),
    new Question("tan", 225, "1"),
    new Question("tan", 240, "√3"),
    new Question("tan", 270, "Undefined"),
    new Question("tan", 300, "-√3"),
    new Question("tan", 315, "-1"),
    new Question("tan", 330, "-√3/3")
]

const cotQuestions = [
    new Question("cot", 0, "Undefined"),
    new Question("cot", 30, "√3"),
    new Question("cot", 45, "1"),
    new Question("cot", 60, "√3/3"),
    new Question("cot", 90, "0"),
    new Question("cot", 120, "-√3/3"),
    new Question("cot", 135, "-1"),
    new Question("cot", 150, "-√3"),
    new Question("cot", 180, "Undefined"),
    new Question("cot", 210, "√3"),
    new Question("cot", 225, "1"),
    new Question("cot", 240, "√3/3"),
    new Question("cot", 270, "0"),
    new Question("cot", 300, "-√3/3"),
    new Question("cot", 315, "-1"),
    new Question("cot", 330, "-√3")
]

const secQuestions = [
    new Question("sec", 0, "1"),
    new Question("sec", 30, "2√3/3"),
    new Question("sec", 45, "√2"),
    new Question("sec", 60, "2"),
    new Question("sec", 90, "Undefined"),
    new Question("sec", 120, "-2"),
    new Question("sec", 135, "-√2"),
    new Question("sec", 150, "-2√3/3"),
    new Question("sec", 180, "-1"),
    new Question("sec", 210, "-2√3/3"),
    new Question("sec", 225, "-√2"),
    new Question("sec", 240, "-2"),
    new Question("sec", 270, "Undefined"),
    new Question("sec", 300, "2"),
    new Question("sec", 315, "√2"),
    new Question("sec", 330, "2√3/3")
]

const cscQuestions = [
    new Question("csc", 0, "Undefined"),
    new Question("csc", 30, "2"),
    new Question("csc", 45, "√2"),
    new Question("csc", 60, "2√3/3"),
    new Question("csc", 90, "1"),
    new Question("csc", 120, "2√3/3"),
    new Question("csc", 135, "√2"),
    new Question("csc", 150, "2"),
    new Question("csc", 180, "Undefined"),
    new Question("csc", 210, "-2"),
    new Question("csc", 225, "-√2"),
    new Question("csc", 240, "-2√3/3"),
    new Question("csc", 270, "-1"),
    new Question("csc", 300, "-2√3/3"),
    new Question("csc", 315, "-√2"),
    new Question("csc", 330, "-2")
]

let validQuestions = sinQuestions
validQuestions = validQuestions.concat(cosQuestions)
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
    let text = question.trig + "(" + question.angle + ")"
    document.getElementById("question").innerHTML = text
}

let myQuestion = selectQuestion()
setButtons(myQuestion, validAnswers)
displayQuestion(myQuestion)
console.log(myQuestion.answer)


document.getElementById("button0").onclick = function(){

    let buttonAnswer = document.getElementById("button0").textContent
    let correctAnswer = myQuestion.answer

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

document.getElementById("update").onclick = function(){

    validQuestions = [];

    if(document.getElementById("sin").checked){
        validQuestions = validQuestions.concat(sinQuestions)
    }
    if(document.getElementById("cos").checked){
        validQuestions = validQuestions.concat(cosQuestions)
    }
    if(document.getElementById("tan").checked){
        validQuestions = validQuestions.concat(tanQuestions)
    }
    if(document.getElementById("cot").checked){
        validQuestions = validQuestions.concat(cotQuestions)
    }
    if(document.getElementById("sec").checked){
        validQuestions = validQuestions.concat(secQuestions)
    }
    if(document.getElementById("csc").checked){
        validQuestions = validQuestions.concat(cscQuestions)
    }

    nextQuestion()

}


function nextQuestion(){
    document.getElementById("correct").innerHTML = ""
    myQuestion = selectQuestion()
    setButtons(myQuestion, validAnswers)
    displayQuestion(myQuestion)
    console.log(myQuestion.answer)

}

