
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

const invSinQuestions = [
    new Question("invSin", "0", 0),
    new Question("invSin", "1/2", 30),
    new Question("invSin", "√2/2", 45),
    new Question("invSin", "√3/2", 60),
    new Question("invSin", "1", 90),
    new Question("invSin", "-1", -90),
    new Question("invSin", "-1/2", -30),
    new Question("invSin", "-√2/2", -45),
    new Question("invSin", "-√3/2", -60)
]

const invCosQuestions = [
    new Question("invCos", "0", 90),
    new Question("invCos", "1/2", 60),
    new Question("invCos", "√2/2", 45),
    new Question("invCos", "√3/2", 30),
    new Question("invCos", "1", 0),
    new Question("invCos", "-1", 180),
    new Question("invCos", "-1/2", 120),
    new Question("invCos", "-√2/2", 135),
    new Question("invCos", "-√3/2", 150)
]

const invTanQuestions = [
    new Question("invTan", "0", 0),
    new Question("invTan", "√3/3", 30),
    new Question("invTan", "1", 45),
    new Question("invTan", "√3", 60),
    new Question("invTan", "-√3/3", -30),
    new Question("invTan", "-1", -45),
    new Question("invTan", "-√3", -60)
]

const invCotQuestions = [
    new Question("invCot", "0", 90),
    new Question("invCot", "√3/3", 60),
    new Question("invCot", "1", 45),
    new Question("invCot", "√3", 30),
    new Question("invCot", "-√3/3", 120),
    new Question("invCot", "-1", 135),
    new Question("invCot", "-√3", 150)
]

const invSecQuestions = [
    new Question("invSec", "2", 60),
    new Question("invSec", "√2", 45),
    new Question("invSec", "2√3/3", 30),
    new Question("invSec", "1", 0),
    new Question("invSec", "-1", 180),
    new Question("invSec", "-2", 120),
    new Question("invSec", "-√2", 135),
    new Question("invSec", "-2√3/3", 150)
]

const invCscQuestions = [
    new Question("invCsc", "1", 90),
    new Question("invCsc", "2√3/3", 60),
    new Question("invCsc", "√2", 45),
    new Question("invCsc", "2", 30),
    new Question("invCsc", "-2", -30),
    new Question("invCsc", "-√2", -45),
    new Question("invCsc", "-2√3/3", -60),
    new Question("invCsc", "-1", -90)
]






let popup = document.getElementById("settingsPopup");
let icon = document.getElementById("settingsIcon");
let span = document.getElementsByClassName("close")[0];

let isChanged

icon.onclick = function() {

    isChanged = false

    popup.style.display = "block";
    const checkboxes = document.querySelectorAll('div#settingsPopup input[type="checkbox"]');

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', function() {
            isChanged = true;
        });
    }
}

span.onclick = function() {
    popup.style.display = "none";

    if(isChanged == true){
        nextQuestion()
        isChanged = false
    }
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";

        if(isChanged == true){
            nextQuestion()
            isChanged = false
        }
    }
}

const startPractice = document.getElementById("startPractice");
const startChallenge = document.getElementById("startChallenge");

const easy = document.getElementById("easy");
const normal = document.getElementById("normal");
const hard = document.getElementById("hard");

const exitButton = document.getElementById("exitButton");

const feedback = document.getElementById("feedback");

const domainNormal = document.getElementById("0-360")
const domainIncrease = document.getElementById("360-720")
const domainDecrease = document.getElementById("-360-0") 

const degreeCheck = document.getElementById("degrees")
const radianCheck = document.getElementById("radians")

const scoreCheck = document.getElementById("showQuestionNumber")
const timerCheck = document.getElementById("showTimer")
const feedbackCheck = document.getElementById("showFeedback")
const accuracyCheck = document.getElementById("showAccuracy")

const endHighscore = document.getElementById("endHighscore")

const answerButtons = [
    document.getElementById("answerButton1"),
    document.getElementById("answerButton2"),
    document.getElementById("answerButton3"),
    document.getElementById("answerButton4"),
    document.getElementById("answerButton5"),
    document.getElementById("answerButton6"),
    document.getElementById("answerButton7"),
    document.getElementById("answerButton8")
]

const trigquestion = document.getElementById("question")

let mode;
let difficulty;

let validQuestions
let validAnswers

let correctAnswerScore = 0;
let totalQuestions = 0;
let totalAnswers = 0;
let accuracy = 0;

let seconds = 0;
let timeInterval

let easyHighscore = getCookies("easyHighscore");
let normalHighscore = getCookies("normalHighscore");
let hardHighscore = getCookies("hardHighscore");

if(isNaN(easyHighscore)){
    easyHighscore = 0;
}
if(isNaN(normalHighscore)){
    normalHighscore = 0;
}
if(isNaN(hardHighscore)){
    hardHighscore = 0;
}

function setDefaults(){
    updateValidQuestions()
    myQuestion = selectQuestion()
    validAnswers = setAnswers(myQuestion)
    setButtons(myQuestion, validAnswers)
    displayQuestion(myQuestion)
}

function setAnswers(question){

    let typeOfQuestion = question.trig
    let questions

    switch (typeOfQuestion){
        case "sin":
            questions = sinQuestions
            break
        case "cos":
            questions = cosQuestions
            break
        case "tan":
            questions = tanQuestions
            break
        case "cot":
            questions = cotQuestions
            break
        case "sec":
            questions = secQuestions
            break
        case "csc":
            questions = cscQuestions
            break
        case "invCos":
            questions = invCosQuestions
            break
        case "invSin":
            questions = invSinQuestions
            break
        case "invTan":
            questions = invTanQuestions
            break
        case "invCot":
            questions = invCotQuestions
            break
        case "invSec":
            questions = invSecQuestions
            break
        case "invCsc":
            questions = invCscQuestions
            break
    }

    let answers = [];

    for(let i = 0; i < questions.length; i++){ 
        answers.push(questions[i].answer) 
    }

    return answers;
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

    if ((question.trig).includes("inv")){

        if(document.getElementById("degrees").checked == true && document.getElementById("radians").checked == true){
            if(Math.random() < 0.5)
                for(let i = 0; i < possibleAnswers.length; i++){
                   possibleAnswers[i] = toRadians(possibleAnswers[i])
                }
        }

        else if(document.getElementById("radians").checked == true){
            for(let i = 0; i < possibleAnswers.length; i++){
                possibleAnswers[i] = toRadians(possibleAnswers[i])
            }
        }
    }

    for(let i = 0; i < answerButtons.length; i++){
        answerButtons[i].innerHTML = possibleAnswers[i]
    }

}

function displayQuestion(question)
{   
    let angle = question.angle

    if ((question.trig).includes("inv")){
        
        let text = (question.trig).slice(3).toLowerCase() + "<sup>-1</sup>(" + angle + ")"
        trigquestion.innerHTML = text

    }

    else{
        
        if(domainIncrease.checked && domainDecrease.checked == false && domainNormal.checked == false){
            angle += 360
        }

        else if(domainIncrease.checked == false && domainDecrease.checked && domainNormal.checked == false){
            angle -= 360
        }

        else if(domainIncrease.checked && domainDecrease.checked && domainNormal.checked == false){
            if(Math.random() < 0.5)
                angle += 360
            else
                angle -= 360
        }

        else if(domainIncrease.checked == false && domainDecrease.checked && domainNormal.checked){
            if(Math.random() < 0.5)
                angle -= 360
        }

        else if(domainIncrease.checked && domainDecrease.checked == false && domainNormal.checked){
            if(Math.random() < 0.5)
                angle += 360
        }

        else if(domainIncrease.checked && domainDecrease.checked && domainNormal.checked){
            if(Math.random() < 0.5)
                angle += 360
            if(Math.random() < 0.5)
                angle -= 360
        }

        if(document.getElementById("degrees").checked == true && document.getElementById("radians").checked == true){
            if(Math.random() < 0.5)
                angle = toRadians(angle)
        }

        else if(document.getElementById("radians").checked == true){
            angle = toRadians(angle)
        }

        let text = question.trig + "(" + angle + ")"
        trigquestion.innerHTML = text
    }
    
}

function updateValidQuestions(){

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
    if(document.getElementById("invsin").checked){
        validQuestions = validQuestions.concat(invSinQuestions)
    }
    if(document.getElementById("invcos").checked){
        validQuestions = validQuestions.concat(invCosQuestions)
    }
    if(document.getElementById("invtan").checked){
        validQuestions = validQuestions.concat(invTanQuestions)
    }
    if(document.getElementById("invcot").checked){
        validQuestions = validQuestions.concat(invCotQuestions)
    }
    if(document.getElementById("invsec").checked){
        validQuestions = validQuestions.concat(invSecQuestions)
    }
    if(document.getElementById("invcsc").checked){
        validQuestions = validQuestions.concat(invCscQuestions)
    }
}

document.getElementById("showTimer").onchange = function(){

    if(document.getElementById("showTimer").checked){
        document.getElementById("timer").style.visibility = "visible"
    }
    else{
        document.getElementById("timer").style.visibility = "hidden"
    }
}

document.getElementById("showAccuracy").onchange = function(){

    if(document.getElementById("showAccuracy").checked){
        document.getElementById("accuracy").style.visibility = "visible"
    }
    else{
        document.getElementById("accuracy").style.visibility = "hidden"
    }
}

document.getElementById("showQuestionNumber").onchange = function(){

    if(document.getElementById("showQuestionNumber").checked){
        document.getElementById("myScore").style.visibility = "visible"
    }
    else{
        document.getElementById("myScore").style.visibility = "hidden"
    }
}

document.getElementById("selectAll").onclick = function(){
    const checkboxes = document.querySelectorAll('div#settingsPopup input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {checkbox.checked = true;})

    document.getElementById("timer").style.display = "flex"
    document.getElementById("myScore").style.display = "flex"
    document.getElementById("accuracy").style.display = "flex"

    isChanged = true

    updateValidQuestions()
}

document.getElementById("deselectAll").onclick = function(){
    const checkboxes = document.querySelectorAll('div#settingsPopup input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {checkbox.checked = false;})

    document.getElementById("timer").style.display = "none"
    document.getElementById("myScore").style.display = "none"
    document.getElementById("accuracy").style.display = "none"

    isChanged = true

    updateValidQuestions()
}

function buttonAnswerClick(buttonName){
    let buttonAnswer = document.getElementById(buttonName).textContent
    let correctAnswer = myQuestion.answer

    let dummyButton1 = document.getElementById("answerButton1").textContent
    let dummyButton2 = document.getElementById("answerButton2").textContent
    let dummyButton3 = document.getElementById("answerButton3").textContent

    if (dummyButton1.includes("π") || dummyButton2.includes("π") || dummyButton3.includes("π")){
        correctAnswer = toRadians(correctAnswer)
    }

    if(buttonAnswer == correctAnswer){

        correctAnswerScore += 1;

        feedback.textContent = "Correct"
        feedback.classList.remove("animate")
        void feedback.offsetWidth
        feedback.style.opacity = 1;
        feedback.style.color = "green"
        feedback.classList.add("animate")
        feedback.style.opacity= 0;

        totalQuestions += 1;

        nextQuestion();
    }
    else{

        if(document.getElementById("showFeedback").checked){
            feedback.textContent = "Correct answer: " + correctAnswer;
        }
        else if (mode == "challenge"){
            feedback.textContent = "-5 Seconds";
            seconds -= 5;
            minutes = Math.floor(seconds / 60);
            remainderSeconds = seconds % 60;
            display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
            document.getElementById("timer").textContent = display;

            if(seconds <= 0){
                endChallenge();
            }
        }
        else{
            feedback.textContent = "Incorrect"
        }

        feedback.classList.remove("animate")
        void feedback.offsetWidth
        feedback.style.opacity = 1;
        feedback.style.color = "red"
        feedback.classList.add("animate")
        feedback.style.opacity = 0; 
    }

    totalAnswers += 1;
    accuracy = (100 * correctAnswerScore/totalAnswers).toFixed(0);

    if(mode == "practice"){
        document.getElementById("myScore").innerHTML = "#" + (totalQuestions + 1)
        document.getElementById("accuracy").innerHTML = accuracy + "%"
    }

    else if(mode == "challenge"){
        document.getElementById("myScore").innerHTML = "Score: " + (correctAnswerScore)
    }
    
}

function toRadians(degree){

    let radianMeasurement

    if(degree == 0)
        radianMeasurement = "0"

    else if(degree % 180 == 0){
        radianMeasurement = degree/180 + "π" 
        if (degree/180 == 1 || degree/180 == -1){
            radianMeasurement = radianMeasurement.replace(/1/g, "")
        }
    }
    else if(degree % 90 == 0){
        radianMeasurement = degree/90 + "π/2"
        if (degree/90 == 1 || degree/90 == -1){
            radianMeasurement = radianMeasurement.replace(/1/g, "")
        }
    }
    else if(degree % 60 == 0){
        radianMeasurement = degree/60 + "π/3"
        if (degree/60 == 1 || degree/60 == -1){
            radianMeasurement = radianMeasurement.replace(/1/g, "")
        }
    }
    else if(degree % 45 == 0){
        radianMeasurement = degree/45 + "π/4"
        if (degree/45 == 1 || degree/45 == -1){
            radianMeasurement = radianMeasurement.replace(/1/g, "")
        }
    }
    else if(degree % 30 == 0){
        radianMeasurement = degree/30 + "π/6"
        if (degree/30 == 1 || degree/30 == -1){
            radianMeasurement = radianMeasurement.replace(/1/g, "")
        }
    }
    return radianMeasurement
}

function nextQuestion(){

    myQuestion = selectQuestion()
    validAnswers = setAnswers(myQuestion)
    setButtons(myQuestion, validAnswers)
    displayQuestion(myQuestion)
}

function startTimer() {

    timeInterval = setInterval(() => {
        seconds++;
        minutes = Math.floor(seconds / 60);
        remainderSeconds = seconds % 60;
        display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
        document.getElementById('timer').textContent = display;
    }   , 1000);
}

function startTimerChallenge() {

    timeInterval = setInterval(() => {
        seconds--;

        if(seconds <= 0){
            endChallenge();
        }

        minutes = Math.floor(seconds / 60);
        remainderSeconds = seconds % 60;
        display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
        document.getElementById("timer").textContent = display;
    }   , 1000);
}

startPractice.onclick = function () {

    mode = "practice"
    updateDisplay()

    resetInfo();
    setDefaults();
}

startChallenge.onclick = function() {

    document.getElementById("homescreen").style.display = "none";
    document.getElementById("challengeSelect").style.display = "flex";

    document.getElementById("easyHighscoreLabel").textContent = "High score: " + easyHighscore
    document.getElementById("normalHighscoreLabel").textContent = "High score: " + normalHighscore
    document.getElementById("hardHighscoreLabel").textContent = "High score: " + hardHighscore
}

function startEasy() {

    mode = "challenge"
    difficulty = "easy"

    updateDisplay()

    degreeCheck.checked = true
    radianCheck.checked = true
    domainNormal.checked = true
    domainIncrease.checked = false
    domainDecrease.checked = false

    validQuestions = (sinQuestions.slice(0, 5)).concat(cosQuestions.slice(0, 5))
    myQuestion = selectQuestion()
    validAnswers = setAnswers(myQuestion)
    setButtons(myQuestion, validAnswers)
    displayQuestion(myQuestion)

    resetInfo()
}

function startNormal() {

    mode = "challenge"
    difficulty = "normal"

    updateDisplay()

    degreeCheck.checked = true
    radianCheck.checked = true
    domainNormal.checked = true
    domainIncrease.checked = false
    domainDecrease.checked = false

    validQuestions = sinQuestions.concat(cosQuestions).concat(tanQuestions)
    myQuestion = selectQuestion()
    validAnswers = setAnswers(myQuestion)
    setButtons(myQuestion, validAnswers)
    displayQuestion(myQuestion)

    resetInfo()
}

function startHard() {

    mode = "challenge"
    difficulty = "hard"

    updateDisplay()

    degreeCheck.checked = true
    radianCheck.checked = true
    domainNormal.checked = true
    domainIncrease.checked = true
    domainDecrease.checked = true

    validQuestions = sinQuestions.concat(cosQuestions).concat(tanQuestions).concat(cotQuestions).concat(secQuestions).concat(cscQuestions).concat(invCosQuestions).concat(invSinQuestions).concat(invTanQuestions)
    myQuestion = selectQuestion()
    validAnswers = setAnswers(myQuestion)
    setButtons(myQuestion, validAnswers)
    displayQuestion(myQuestion)

    resetInfo()
}

exitButton.onclick = function() {
    document.getElementById("practiceMode").style.display = "none";
    document.getElementById("homescreen").style.display = "flex";

    clearInterval(timeInterval)
}

function resetInfo(){

    if(mode == "practice"){
        correctAnswerScore = 0
        totalQuestions = 0
        totalAnswers = 0;
        accuracy = 0
        document.getElementById("accuracy").innerHTML = ""
        document.getElementById("myScore").textContent = "#1" 

        clearInterval(timeInterval)
        seconds = 0
        document.getElementById("timer").textContent = "0:00";

        startTimer()
    }

    else if (mode == "challenge"){
        correctAnswerScore = 0
        totalQuestions = 0
        totalAnswers = 0;
        accuracy = 0

        document.getElementById("myScore").textContent = "Score: 0" 

        clearInterval(timeInterval)
        seconds = 60
        document.getElementById("timer").textContent = "1:00";

        startTimerChallenge()

    }
    
}

function updateDisplay(){
    
    if(mode == "practice"){
        document.getElementById("homescreen").style.display = "none";
        document.getElementById("practiceMode").style.display = "flex";
        document.getElementById("settingsIcon").style.display = "flex";
        document.getElementById("accuracy").style.display = "flex"
        accuracyCheck.checked = true;

        exitButton.textContent = "Exit Practice"
        feedback.style.color = "#ffffff"
        feedback.textContent = "start"
    }
    else if(mode == "challenge"){
        document.getElementById("challengeSelect").style.display = "none";
        document.getElementById("challengeEnd").style.display = "none";
        document.getElementById("practiceMode").style.display = "flex";
        document.getElementById("settingsIcon").style.display = "none";
        document.getElementById("accuracy").style.display = "none"

        scoreCheck.checked = true;
        timerCheck.checked = true;
        feedbackCheck.checked = false;
        exitButton.textContent = "Quit Challenge"
        feedback.style.color = "green"
        feedback.textContent = "Begin"
    }
}

function endChallenge(){

    clearInterval(timeInterval)
    document.getElementById("practiceMode").style.display = "none"
    document.getElementById("challengeEnd").style.display = "flex"

    document.getElementById("endScore").textContent = "Score: " + correctAnswerScore
    console.log(difficulty)
    switch(difficulty){
        
        case "easy":
            if(correctAnswerScore > easyHighscore){
                easyHighscore = correctAnswerScore;
                document.cookie = "easyHighscore=" + easyHighscore + ";"
            }
            endHighscore.textContent = "High score: " + easyHighscore
            break
        case "normal":
            if(correctAnswerScore > normalHighscore){
                normalHighscore = correctAnswerScore;
                document.cookie = "normalHighscore=" + normalHighscore + ";"
             }
            endHighscore.textContent = "High score: " + normalHighscore
            break
        case "hard":
            if(correctAnswerScore > hardHighscore){
                hardHighscore = correctAnswerScore;
                document.cookie = "hardHighscore=" + hardHighscore + ";" 
            }
            endHighscore.textContent = "High score: " + hardHighscore
            break
    }



}

document.getElementById("returnHome").onclick = function(){
    document.getElementById("challengeEnd").style.display = "none"
    document.getElementById("homescreen").style.display = "flex"

}

document.getElementById("playAgain").onclick = function(){

    switch(difficulty){
        
        case "easy":
            startEasy()
            break
        case "normal":
            startNormal()
            break
        case "hard":
            startHard()
            break
    }

}

function getCookies(name){

    let cookieArr = decodeURIComponent(document.cookie).split("; ")

    for(let i = 0; i < cookieArr.length; i++) {

        let cookiePair = cookieArr[i].split("=");

        console.log(cookiePair)
        console.log(name)
        
        if (cookiePair[0] == name){
            return cookiePair[1]
        }
    }

}



