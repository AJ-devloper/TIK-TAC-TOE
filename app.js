let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll(".reset");

   let turnO = true; //player X &player Y

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => { 
            console.log("box was clicked");
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
       });  

});


const checkwinner = () => {
    for (let pattern of winPatterns) {
        console.log(pattern[0], pattern[1], pattern[2], pattern[3]);
        console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]], boxes[pattern[3]]
            
        );
    }
    
};