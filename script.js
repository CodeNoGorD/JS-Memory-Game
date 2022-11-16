const cardArray = [
    {
        name: 'arya',
        img : './images/arya.png',
    },
    {
        name: 'cersei',
        img : './images/cersei.png',
    },
    {
        name: 'daenerys',
        img : './images/daenerys.png',
    },
    {
        name: 'robb',
        img : './images/robb.png',
    },
    {
        name: 'snow',
        img : './images/snow.png',
    },
    {
        name: 'tyrion',
        img : './images/tyrion.png',
    },
    {
        name: 'arya',
        img : './images/arya.png',
    },
    {
        name: 'cersei',
        img : './images/cersei.png',
    },
    {
        name: 'daenerys',
        img : './images/daenerys.png',
    },
    {
        name: 'robb',
        img : './images/robb.png',
    },
    {
        name: 'snow',
        img : './images/snow.png',
    },
    {
        name: 'tyrion',
        img : './images/tyrion.png',
    },
];

cardArray.sort(()=> 0.5 - Math.random());

const grilleAffichage = document.querySelector('#grid');
const result= document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon =[];

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    console.log(cardsChosen[0]);
    console.log(cardsChosen[1]);

    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', './images/fond.png');
        cards[optionTwoId].setAttribute('src', './images/fond.png');
        alert(' Vous avez cliqué sur la même image !');
      
    }

   if ((cardsChosen[0] == cardsChosen[1]) && (optionOneId != optionTwoId)){
    console.log('test');
    alert('Vous avez trouvé les 2 images');
    cards[optionOneId].setAttribute('src', './images/white.png');
    cards[optionTwoId].setAttribute('src', './images/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
   }
   else {
    cards[optionOneId].setAttribute('src', './images/fond.png');
    cards[optionTwoId].setAttribute('src', './images/fond.png');
   }

   result.textContent = cardsWon.length;
   cardsChosen = [];
   cardsChosenIds = [];

   if (cardsWon.length == cardArray.length/2){
        result.innerHTML = 'Félicitations vous avez gagné !'
   }
}

function createBoard(){
    for(let i=0; i < cardArray.length; i++){
       const card = document.createElement('img');
       card.setAttribute('src', './images/fond.png');
       card.setAttribute('data-id', i);
       card.addEventListener('click', flipCard);
       grilleAffichage.append(card);
    }
}
createBoard();

function flipCard(){
   const cardId =  this.getAttribute('data-id');
   cardsChosen.push(cardArray[cardId].name);
   cardsChosenIds.push(cardId);
   this.setAttribute('src', cardArray[cardId].img)
   if (cardsChosen.length  === 2){
        setTimeout(checkMatch, 500);
   }
}









