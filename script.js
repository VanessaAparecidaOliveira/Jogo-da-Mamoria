const cards = document.querySelectorAll(".card");
let hasFlippedCard = false
let firstCard, secondCard;

function flipCard(){
    this.classList.toggle("flip");
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
}

function checkForMath(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}

cards.forEach ((card) =>{
    card.addEventListenter("click",flipCard)
})



