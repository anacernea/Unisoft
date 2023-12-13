

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

    selectedAnswersData.push()
    

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

    dict["PSD"]=(100*psd/maxPsd).toFixed(2);
    dict["PNL"]=(100*pnl/maxPnl).toFixed(2);
    dict["AUR"]=(100*aur/maxAur).toFixed(2);
    dict["USR"]=(100*usr/maxUsr).toFixed(2);
    dict["UDMR"]=(100*udmr/maxUdmr).toFixed(2);

    culoarePartid={};
    culoarePartid["PNL"]='rgba(249, 231, 0, 1)';
    culoarePartid["PSD"]='rgba(237, 38, 43, 1)';
    culoarePartid["USR"]='rgba(0, 42, 89, 1)';
    culoarePartid["UDMR"]='rgba(21, 128, 60, 1)';
    culoarePartid["AUR"]='rgba(252, 194, 36, 1)';

    var items = Object.keys(dict).map(function(key){
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

    startMenu.style.display = 'none';
    container.style.display = 'none';
    result.style.display = 'flex';
    result.innerHTML =
        `
        <div class="resultrow">
            <div class="partid1">
                <h3>PSD</h3>
                <p style="font-size:20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button class="butonpartid1">Descopera mai multe</button>
            </div>
            <div>
                <canvas id="myChart" style="width:100%;"></canvas>
                <button class="restart">Restart</button>
            </div>
            <div class="partid2">
                <h3>PNL</h3>
                <p style="font-size:20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button class="butonpartid2">Descopera mai multe</button>
            </div>
            <div class="partid3">
                <h3>USR</h3>
                <p style="font-size:20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button class="butonpartid3">Descopera mai multe</button>
            </div>
            <div class="partid4">
                <h3>AUR</h3>
                <p style="font-size:20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button class="butonpartid4">Descopera mai multe</button>
            </div>
            <div class="partid5">
                <h3>UDMR</h3>
                <p style="font-size:20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button class="butonpartid5">Descopera mai multe</button>
            </div>
        </div>
        `;
    const restartButton = document.querySelector('.restart');
    restartButton.addEventListener('click',restartQuiz);
    makeGraph(numePartideSortat, valoriPartideSortat, culoriPartideSortat);
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
result.style.display = 'none';
container.style.display = 'none';
generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
endButton.addEventListener('click', loadEndMenu);
startButton.addEventListener('click', startQuiz);

