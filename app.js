let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newbtn=document.querySelector(".new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let turn0=true;
const winP=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    console.log("button was clicked");
    count++;
    if(turn0){
        box.innerText="O";
        turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;
    check();
    });
});
const check=()=>{
    for(let pattern of winP){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
    if(pos1!="" &&pos2!="" &&pos3!=""){
        if(pos1===pos2 &&pos2===pos3){
            console.log("winner is "+pos1);
            showWinner(pos1);
        }
    }
    }
    if(count==9){
        draw();
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledbox()

}
const draw=()=>{
    msg.innerText=  `Game Draw`;
    msgContainer.classList.remove("hide");
    disabledbox();
}
const disabledbox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledbox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetgame=()=>{
    turn0=true;
    enabledbox();
    msgContainer.classList.add("hide");
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);






