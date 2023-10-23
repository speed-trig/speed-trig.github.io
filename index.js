
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

let validQuestions
let validAnswers

let correctAnswerScore = 0;
let incorrectAnswerScore = 0;
let totalQuestions = 0;
let averageScore = 0;

function setDefaults(){
    validQuestions = sinQuestions
    validQuestions = validQuestions.concat(cosQuestions)
    validAnswers = setAnswers(validQuestions);
    myQuestion = selectQuestion()
    setButtons(myQuestion, validAnswers)
    displayQuestion(myQuestion)
}

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

    for(let i = 0; i < 7; i++){
        possibleAnswers.push(answers[Math.floor(Math.random() * answers.length)])
        answers = answers.filter(item => !possibleAnswers.includes(item))
    }

    for (let i = possibleAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [possibleAnswers[i], possibleAnswers[j]] = [possibleAnswers[j], possibleAnswers[i]];
    }

    //possibleAnswers.sort()

    let answerButtons = document.getElementById("answerButtons").getElementsByTagName("button")

    for(let i = 0; i < answerButtons.length; i++){
        answerButtons[i].innerHTML = possibleAnswers[i]
    }

}

function displayQuestion(question)
{   
    let angle = question.angle

    if(document.getElementById("degrees").checked == true && document.getElementById("radians").checked == true){
        if(Math.random() < 0.5)
            angle = toRadians(angle).replace(/1/g, "")
    }

    else if(document.getElementById("radians").checked == true){
        angle = toRadians(angle).replace(/1/g, "")
    }

    let text = question.trig + "(" + angle + ")"
    document.getElementById("question").innerHTML = text
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

    validAnswers = setAnswers(validQuestions);

    nextQuestion()

}

function buttonAnswerClick(buttonName){
    let buttonAnswer = document.getElementById(buttonName).textContent
    let correctAnswer = myQuestion.answer

    if(buttonAnswer == correctAnswer){
        document.getElementById("correct").innerHTML = "correct"
        correctAnswerScore += 1;
        document.getElementById("correctAnswerScore").innerHTML = correctAnswerScore
    }
    else{
        document.getElementById("correct").innerHTML = "incorrect"
        incorrectAnswerScore += 1;
        document.getElementById("incorrectAnswerScore").innerHTML = incorrectAnswerScore
    }

    totalQuestions += 1;
    averageScore = correctAnswerScore/totalQuestions;

    document.getElementById("totalQuestions").innerHTML = totalQuestions
    document.getElementById("averageScore").innerHTML = averageScore

    nextQuestion();

}

function toRadians(degree){

    if(degree == 0)
        return "0"

    else if(degree % 180 == 0)
        return degree/180 + "π"

    else if(degree % 90 == 0)
        return degree/90 + "π/2"

    else if(degree % 60 == 0)
        return degree/60 + "π/3"

    else if(degree % 45 == 0)
        return degree/45 + "π/4"

    else if(degree % 30 == 0)
        return degree/30 + "π/6"
}

function nextQuestion(){
    document.getElementById("correct").innerHTML = ""
    myQuestion = selectQuestion()
    setButtons(myQuestion, validAnswers)
    displayQuestion(myQuestion)

}

setDefaults()

