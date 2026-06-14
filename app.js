console.log("Welcome To TicTacToe");
let background=new Audio("background.mp3")
let Turn=new Audio("play.wav");
let gameOver=new Audio("gameOver.mp3")
let happy=new Audio("happy.mp3")
background.loop=true;
let turn="X";
let isgameover=false;
happy.loop=true;

//function to change turn
const changeTurn=()=>{
    return turn==="X"?"0":"X";

}
//checkwin


const checkWin=()=>{
    let boxText=document.getElementsByClassName('boxText')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
wins.forEach(e=>{ 
    // 0th ele 
  if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
    isgameover=true;

    console.log("win")
    setTimeout(() => alert(`${boxText[e[0]].innerText} Wins 😁`), 200);
  
// document.querySelector(".info").innerText= boxText[e[0]].innerText +" WINS " ;
background.pause();
document.querySelector(".imgBox img").style.width="200px"
happy.play();
  
  }
})
}


//game logic
let boxes= document.querySelectorAll(".box")
// let boxText=document.querySelector(".boxText");
// for(const box of boxes){
//     box.addEventListener("click",()=>{
//         console.log("click")
//         if(boxText.innerText==''){
//             boxText.innerText=turn;
//         }
//     })
// }

btnStart =document.querySelector("#start");
btnStart.addEventListener("click",()=>{
background.play();


Array.from(boxes).forEach(box=>{
     let boxText=box.querySelector(".boxText"); //boxText --->span 
    box.addEventListener("click",()=>{
      console.log("click")
      if(boxText.innerText===''){
        boxText.innerText=turn;
      turn= changeTurn();
        Turn.play();
        checkWin();
if(!isgameover){
document.querySelector(".info").innerText= "Turn for : "+ turn;
}
  }

    })
})



})
//reset button logic 
let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
  let boxText=document.querySelectorAll(".boxText");
  Array.from(boxText).forEach(box=>{
    box.innerText=""
  })
  isgameover=false;
  document.querySelector(".imgBox img").style.width="0px"
  happy.pause();
  background.play();
  document.querySelector(".info").innerText = "";
})



// Array.from(boxes).forEach(box=>{
//      let boxText=box.querySelector(".boxText"); //boxText --->span 
//     box.addEventListener("click",()=>{
//       console.log("click")
//       if(boxText.innerText===''){
//         boxText.innerText=turn;
//       turn= changeTurn();
//         Turn.play();
//         checkWin();
// if(!isgameover){
// document.querySelector(".info").innerText= "Turn for : "+ turn;
// }
//       }
//     })
// })

// function showRestartPopup() {
//     Swal.fire({
//         title: "Game Over!",
//         text: "Do you want to restart?",
//         icon: "success",
//         confirmButtonText: "Restart",
//         allowOutsideClick: false
//     }).then((result) => {
//         if (result.isConfirmed) {
//             restartGame();
//         }
//     });
// }

// function restartGame() {
//     // Clear all boxes
//     let boxes = document.getElementsByClassName("box");
//     for (let box of boxes) {
//         box.innerText = "";
//         box.style.pointerEvents = "auto"; // enable again
//     }

//     document.querySelector(".info").innerText = "Turn for X";
// }