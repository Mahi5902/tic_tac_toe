console.log("welcome to Tic Tac Toe");
//function to change the turn
let turn="X";
let turn2="0";
let gameOver=false;
let resetEl=document.getElementById("reset");
const changeTurn=()=>{
return turn==="X"?"0":"X";
};
//function to check for win
const checkwin=()=>{
   let boxtext=document.getElementsByClassName("boxtext");
let wins=[
   [0,1,2],
   [3,4,5],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],
   [6,7,8],
]
wins.forEach(e=>{
   if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
   document.querySelector(".info").innerText=boxtext[e[0]].innerText+" is Winner"
gameOver="True";
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";}
})
}
//Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
   
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{

 if(boxtext.innerText===''){
   // console.log("clicked");
    boxtext.innerText=turn;
   //  console.log("clicked");
    turn= changeTurn();
    checkwin();
    if(!gameOver){
    document.getElementsByClassName("info")[0].innerText="Turn for" +turn;
    }
 }


    })
})
//
resetEl.addEventListener("click",()=>{
   let boxtexts=document.querySelectorAll(".boxtext");
   Array.from(boxtexts).forEach(element=>{
      element.innerText="";
      
         
   });
   turn="X";
   gameOver=false;
         document.getElementsByClassName("info")[0].innerText="Turn for  " +turn;
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";

})