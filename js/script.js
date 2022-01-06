// MEMORY
// funzione per creare le cards
function boxCreator (stampHtml, icon, arrayShuffle, i) {
    let variabile = document.createElement('div');
    variabile.className = 'cards d-flex justify-content-center align-items-center text-white';
    stampHtml.append(variabile);       
    variabile.addEventListener("click", function(){
        icon.classList.toggle('hide');
        this.classList.toggle('card-color');
        comparisonArray.push(arrayShuffle[i]);
        if (comparisonArray.length === 2) {
            if (comparisonArray[0].innerHTML === comparisonArray[1].innerHTML){
                comparisonArray[0].classList.add("disabled");
                comparisonArray[1].classList.add("disabled");
            }   
            comparisonArray = []; 
    }                
            
        
        console.log(comparisonArray);
    });
    

    return variabile;
}

// funzione che randomizza le icone
function shuffle(iconsArray) {
let currentIndex = iconsArray.length;
let temporaryValue, randomIndex;

while (currentIndex !== 0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  temporaryValue = iconsArray[currentIndex];
  iconsArray[currentIndex] = iconsArray[randomIndex];
  iconsArray[randomIndex] = temporaryValue;
}
return iconsArray;
}

// funzione che crea icone all'interno delle cards
function newGame(arrayShuffle, iconList, cardCreator, stampHtml) {
outputHtml.innerHTML = '';
for(let i = 0; i < arrayShuffle.length; i++){
    iconList = document.createElement('div');
    iconList.append(arrayShuffle[i]);
    iconList.classList.add('hide');
    cardCreator(stampHtml, iconList, arrayShuffle, i).append(iconList);
}
}

const icons = ['🤑', '🧐', '😎', '🤑', '😈', '🧐','💩', '🤡', '😎', '💩', '🤡','😈'];
let comparisonArray = [];

let divIcons='';

const outputHtml = document.getElementById('output');
const buttonStart = document.querySelector('.button-start');


buttonStart.addEventListener("click", function(){
// return di shuffle
let arrayMixed = shuffle(icons);
console.log(arrayMixed);
newGame(arrayMixed, divIcons, boxCreator, outputHtml);
});