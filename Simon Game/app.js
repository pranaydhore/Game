// star game
let gameSeq=[];
let userSeq=[];

let btns=["yellow","purple","red","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
console.dir(h2);

document.addEventListener("keypress", function() {
    if(started==false) {
        console.log("game started.");
        started=true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);

}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);

}
let lastScore=0;
function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    lastScore.innerText=level;

    
    let randInd=Math.floor(Math.random()*3);
    let randColor=btns[randInd];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randbtn);
    // console.log(randInd);
    // console.log(randColor);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);

}

function checkAns(idx) {
    // console.log(`currunt level : ${level}`);
    
    if(userSeq[idx]==gameSeq[idx]) {
        if(userSeq.length==gameSeq.length) {
            setTimeout(levelUp,1000);
            levelUp();
        }
    } else{
        h2.innerHTML=`Game Over ! Your Score Was <b>${level}</b> <br> Press Any Key To Restart Game ....`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="blue";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}