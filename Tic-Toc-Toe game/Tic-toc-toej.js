let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgc = document.querySelector(".msgc");

let turn = true;

const win= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if (turn){
        box.innerText = "O";
        turn=false;
        }
        else{
            box.innerText = "X";
            turn=true;
        }
        box.disabled = true;
        winner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const resetgame = () =>{
    turn = true;
    enableboxes();
    msgc.classList.add("hide");
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    const msg = document.querySelector("#msg");
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgc.classList.remove("hide");
    disableboxes();
};

const winner = () =>{
    for (let pattern of win){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3){
                console.log("Winner",pos1);
                showwinner(pos1);
                return;
            }
        }
    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);