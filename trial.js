let playerEl={name:"Franklin",chips:"150.00"};
let cardsArray=[];
let sum= 0;
let hasBlackJack= false;
let isAlive=false;
let message= "";

let PlayerEarnings= document.getElementById("player-el")

function randNum(){
   let generated=Math.floor((Math.random()*13)+1) 
   if (generated===1){
      return 11
   }
   else if (generated>10 && generated<14){
      return 10
   }
   else{
      return generated;
   }
}

function startGame(){
   let firstNumber= randNum();
   let secondNumber=randNum();
   cardsArray=[firstNumber,secondNumber];
   sum=firstNumber+secondNumber; 
   start()
}

let yourCards= document.getElementById("cards") 
let yourSum= document.getElementById("sum");
function start(){
   
      isAlive=true;
   yourCards.textContent= "Cards: "
   for(let i=0; i<cardsArray.length; i++){
      yourCards.textContent+= cardsArray[i]+" ";
   }
   yourSum.textContent= "Sum: "+sum;
   if(sum<=20){
      message="Do you want to draw a new card"   
   }
   else if(sum===21){
      message= "✨✨✨YOU HAVE A BLACK JACK🎇🎇🎇"
      hasBlackJack=true;
      PlayerEarnings.textContent=playerEl.name+": $"+playerEl.chips;
   }
   else{
      message= "You are out of the game"
      isAlive=false;
   }
document.getElementById("message-el").textContent=message;

}


function newCard(){
   if (isAlive===true && hasBlackJack===false){
      let thirdNumber= randNum();
      cardsArray.push(thirdNumber);
       sum+=thirdNumber;
      document.getElementById("sum").textContent= sum;
      start();
   }
}

