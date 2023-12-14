var descPartideScurte = {};
descPartideScurte["PSD"] = "PSD Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
descPartideScurte["PNL"] = "PNL Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
descPartideScurte["USR"] = "USR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
descPartideScurte["UDMR"] = "UDMR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
descPartideScurte["AUR"] = "AUR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var descPartideLungi = {};
descPartideLungi["PSD"] = "PSD Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
descPartideLungi["PNL"] = "PNL Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
descPartideLungi["USR"] = "USR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
descPartideLungi["UDMR"] = "UDMR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
descPartideLungi["AUR"] = "AUR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


var partidSelectat = 0;
var items;

const maxPsd = 4;
const maxAur = 4;
const maxPnl = 4;
const maxUsr = 4;
const maxUdmr = 4;

var dict = {};


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const startMenu = document.querySelector('.inceput');
const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const endButton = document.querySelector('.endButton');
const startButton = document.querySelector('.startButton');
const result = document.querySelector('.result');
const moreInfo = document.querySelector('.moreInfo');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Te rog selecteaza un raspuns!');
        return;
    }
    //Get value of selected radio
    const answerScore = selectedOption.nextElementSibling.getAttribute('data-total');
    //console.log(answerScore);
    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push(selectedOption.nextElementSibling.innerHTML);
    

    //const totalScore = score.reduce((total, currentNum) => total + currentNum);


    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Final';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        loadEndMenu();
        return;
    }
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
        //reset array index and score
        currentQuestion = 0;
        score = [];
        //Reload quiz to the start
        location.reload();
    }

}

function startQuiz(){
    container.style.display = 'flex';
    startMenu.style.display = 'none';
}

function loadEndMenu(){
    var psd = 0, pnl = 0, usr = 0, aur = 0, udmr = 0, i = 0, j = 0;
    for(i = 0; i < totalQuestions; i++)
    {
        if(score.length <= i)
            break;
        var s = score[i].split(' ');
        for(j = 0; j < s.length; j++)
        {
            if(s[j] == "psd")
                psd++;
            if(s[j]=="pnl")
                pnl++;
            if(s[j]=="aur")
                aur++;
            if(s[j]=="udmr")
                udmr++;
            if(s[j]=="usr")
                usr++;   
        }

    }
    console.log("PSD: " + psd);
    console.log("AUR: " + aur);
    console.log("UDMR: " + udmr);
    console.log("USR: " + usr);
    console.log("PNL: " + pnl);

    dict["USR"]=(100*usr/maxUsr).toFixed(2);
    dict["PNL"]=(100*pnl/maxPnl).toFixed(2);
    dict["PSD"]=(100*psd/maxPsd).toFixed(2);
    dict["AUR"]=(100*aur/maxAur).toFixed(2);
    dict["UDMR"]=(100*udmr/maxUdmr).toFixed(2);

    culoarePartid={};
    culoarePartid["PNL"]='rgba(249, 231, 0, 1)';
    culoarePartid["PSD"]='rgba(237, 38, 43, 1)';
    culoarePartid["USR"]='rgba(0, 42, 89, 1)';
    culoarePartid["UDMR"]='rgba(21, 128, 60, 1)';
    culoarePartid["AUR"]='rgba(252, 194, 36, 1)';

    items = Object.keys(dict).map(function(key){
        return [key, dict[key], culoarePartid[key]];
    });

    items.sort(function(first, second){
        return second[1]-first[1];
    });

    console.log(items);
    
    partid=[];

    for(i=0; i<items.length; i++)
        partid[i]=items[i][0]+": "+items[i][1]+"%";

    numePartideSortat=[]
    for(i=0; i<items.length; i++)
        numePartideSortat[i]=items[i][0];
    valoriPartideSortat=[]
    for(i=0; i<items.length; i++)
        valoriPartideSortat[i]=items[i][1];
    culoriPartideSortat=[]
    for(i=0; i<items.length; i++)
        culoriPartideSortat[i]=items[i][2];

    moreInfo.style.display = 'none';
    startMenu.style.display = 'none';
    container.style.display = 'none';
    result.style.display = 'flex';
    result.innerHTML =
        `
        <div class="resultrow">
            <div>
                <h3>${(items[0][0])}</h3>
                <p style="font-size:20px">${(descPartideScurte[items[0][0]])}</p>
                <button class="butonpartid1">Descopera mai multe</button>
            </div>
            <div>
                <canvas id="myChart" style="width:100%;"></canvas>
                <button class="restart">Restart</button>
            </div>
            <div>
                <h3>${(items[1][0])}</h3>
                <p style="font-size:20px">${(descPartideScurte[items[1][0]])}</p>
                <button class="butonpartid2">Descopera mai multe</button>
            </div>
            <div>
                <h3>${(items[2][0])}</h3>
                <p style="font-size:20px">${(descPartideScurte[items[2][0]])}</p>
                <button class="butonpartid3">Descopera mai multe</button>
            </div>
            <div>
                <h3>${(items[3][0])}</h3>
                <p style="font-size:20px">${(descPartideScurte[items[3][0]])}</p>
                <button class="butonpartid4">Descopera mai multe</button>
            </div>
            <div>
                <h3>${(items[4][0])}</h3>
                <p style="font-size:20px">${(descPartideScurte[items[4][0]])}</p>
                <button class="butonpartid5">Descopera mai multe</button>
            </div>
        </div>
        `;

    document.querySelector('.butonpartid1').addEventListener('click',butonPartid0);
    document.querySelector('.butonpartid2').addEventListener('click',butonPartid1);
    document.querySelector('.butonpartid3').addEventListener('click',butonPartid2);
    document.querySelector('.butonpartid4').addEventListener('click',butonPartid3);
    document.querySelector('.butonpartid5').addEventListener('click',butonPartid4);

    const restartButton = document.querySelector('.restart');
    restartButton.addEventListener('click',restartQuiz);
    makeGraph(numePartideSortat, valoriPartideSortat, culoriPartideSortat);
}

//100% exista o metoda mai buna de a face asta, dar nu am gasit-o
function butonPartid0(){
    partidSelectat=0;
    moreInformation();
}

function butonPartid1(){
    partidSelectat=1;
    moreInformation();
}

function butonPartid2(){
    partidSelectat=2;
    moreInformation();
}

function butonPartid3(){
    partidSelectat=3;
    moreInformation();
}

function butonPartid4(){
    partidSelectat=4;
    moreInformation();
}

function moreInformation(){
    console.log(partidSelectat);
    moreInfo.style.display = 'flex';

    var questionListDisplay = "";

    console.log("Score: " + score.length + " " + totalQuestions.length);

    for(var i=0; i<totalQuestions; i++){
        if(score.length <= i)
            break;
        const question = questions[i];
        var ok = 0;
        var s = score[i].split(' ');
        console.log("Hahahahi" + s);
        for(j = 0; j < s.length; j++)
        {
            if(s[j]==items[partidSelectat][0].toLowerCase())
            {
                ok=1;
                console.log("Hihihiha");
            }
        }
        if(ok==1){
            questionListDisplay += ("<p>" + (i+1) + ". " + question.question + " " + selectedAnswersData[i] + "</p>");
        }
    }

    console.log(selectedAnswersData);

    moreInfo.innerHTML =
     `
     <div class="title">${(items[partidSelectat][0])}</div>
        <p>${(descPartideLungi[items[partidSelectat][0]])}</p>
        <div class="intrebariNimerite">
            <h3>Intrebarile unde ai fost de acord cu ${(items[partidSelectat][0])}:</h3>
            ${questionListDisplay}
        </div>
        <button class="backToResult">Inapoi</button>
     `;

    result.style.display = 'none';
    const backToResultButton = document.querySelector('.backToResult');
    backToResultButton.addEventListener('click',loadEndMenu);
}

function makeGraph(numePartideSortat, valoriPartideSortat, culoriPartideSortat){

    Chart.defaults.global.defaultFontColor = "#3B413C";
    Chart.defaults.global.defaultFontFamily='Roboto';
    Chart.defaults.global.defaultFontSize=24;

    const datas = {
        labels: numePartideSortat,
        datasets: [{
            label: 'Rezultat',
            data: valoriPartideSortat,
            backgroundColor: culoriPartideSortat,
            borderColor: [
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)'
              ],
              borderWidth: 2
        }]
    };
        
    new Chart("myChart", {
        type: "bar",
        data: datas,
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 100
                    },
                    gridLines: { color: "#fff" }
                }],
                xAxes: [{gridLines: { color: "#fff" }}]
            }
          }
    });
}

//startMenu.style.display = 'none';
moreInfo.style.display = 'none';
result.style.display = 'none';
container.style.display = 'none';
generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
endButton.addEventListener('click', loadEndMenu);
startButton.addEventListener('click', startQuiz);

