const cardArray=[
    {
        name: "fries",
        src: "images/fries.png"
    },
    {
        name: "cheeseburger",
        src: "images/cheeseburger.png"
    },
    {
        name: "ice-cream",
        src: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        src: "images/milkshake.png"
    },
    {
        name: "hotdog",
        src: "images/hotdog.png"
    },
    {
        name: "pizza",
        src: "images/pizza.png"
    },
    {
        name: "fries",
        src: "images/fries.png"
    },
    {
        name: "cheeseburger",
        src: "images/cheeseburger.png"
    },
    {
        name: "ice-cream",
        src: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        src: "images/milkshake.png"
    },
    {
        name: "hotdog",
        src: "images/hotdog.png"
    },
    {
        name: "pizza",
        src: "images/pizza.png"
    },
   
]


cardArray.sort(()=>0.5-Math.random())


const gridDisplay=document.querySelector(".grid")
const resultDisplay=document.querySelector("#result")
let cardsChosen=[];
let cardsChosenId=[];
let cardsWon=[];
function createBoard(){
    for(let i=0;i<12;i++){
        let card =document.createElement("img");
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        gridDisplay.appendChild(card)
        console.log(card,i)
        card.classList.add("indiImg")
        card.addEventListener('click',flipcard)
    }

}

function checkMatch(){

    let cards=document.querySelectorAll('img')
    if(cardsChosenId[0]==cardsChosenId[1]){
        alert('you clicked the same card')
        cards[cardsChosenId[0]].setAttribute('src','images/blank.png')
    }
    else if(cardsChosen[0]==cardsChosen[1]){
        alert("that's a match")
        cards[cardsChosenId[0]].setAttribute('src','images/white.png')
        cards[cardsChosenId[1]].setAttribute('src','images/white.png')
        cards[cardsChosenId[0]].removeEventListener('click',flipcard)
        cards[cardsChosenId[1]].removeEventListener('click',flipcard)
        cardsWon.push(cardsChosen)
    }
    else{
       alert('cards did not match')
       cards[cardsChosenId[0]].setAttribute('src','images/blank.png')
       cards[cardsChosenId[1]].setAttribute('src','images/blank.png')
     }
    cardsChosen=[];
    cardsChosenId=[];
    
    resultDisplay.textContent=cardsWon.length
    if(cardsWon.length==(cardArray.length)/2){
        alert('you have found all card')
    }
}

function flipcard(){
    console.log(cardArray)
    let cardId=this.getAttribute('data-id');
    console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].src);
    if(cardsChosen.length===2){
        setTimeout(checkMatch,600)
    }
}
createBoard()