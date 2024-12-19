// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO = true;

// const winPatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [1,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ]

// const resetGame = () => {
//     turnO = true;
//     enabledBoxes();
//     msgContainer.style.display = "none"
// }
// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if(turnO){
//             box.innerText = "O";
//             turnO = false;
//         } else{
//             box.innerText = "X";
//             turnO = true;
//         }

//         box.disabled = true;

//         checkWinner();
//     });
// });

// const disabledBoxes = () =>{
//     for (let box of boxes){
//         box.disabled = true;
//     }
// }

// const enabledBoxes = () =>{
//     for (let box of boxes){
//         box.disabled = false;
//         box.innerHTML = ""
//     }
// }

// const showWinner = (winner) =>{
//     msg.innerHTML = `Congratulations, Winner is ${winner}`;
//     msgContainer.style.display = "block";
//     disabledBoxes();
// }

// const showDraw = () =>{
//     msg.innerHTML = "Draw";
//     msgContainer.style.display = "block";
//     disabledBoxes();
// }

// const checkWinner = () => {
//     for(let pattern of winPatterns){
//         let pos1val = boxes[pattern[0]].innerText;
//         let pos2val = boxes[pattern[1]].innerText;
//         let pos3val = boxes[pattern[2]].innerText;

//         if (pos1val != "" && pos2val != "" && pos3val != ""){
//             if(pos1val === pos2val && pos2val === pos3val){
//                 showWinner(pos1val);
//                 winnerFound = true;
//                 break;
//             } 
//         } 
//     }
// };

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click",resetGame);

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [1, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.style.display = "none";
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.classList.add("o-color");
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.add("x-color");
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.style.display = "block";
    disabledBoxes();
};

const showDraw = () => {
    msg.innerHTML = "It's a Draw!";
    msgContainer.style.display = "block";
    disabledBoxes();
};

const checkWinner = () => {
    let winnerFound = false;

    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                winnerFound = true;
                break;
            }
        }
    }

    if (!winnerFound) {
        let allFilled = Array.from(boxes).every(box => box.innerText !== "");
        if (allFilled) {
            showDraw();
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);