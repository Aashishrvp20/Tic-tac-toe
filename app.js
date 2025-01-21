let boxes = document.querySelectorAll(".box");

let turn = true;
//there r two player playerx and player0
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]; //these r all the winning pattern
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn) {
      //here just turn means turn=true
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true; //this line make sure sam box cant be clicked multiple times

    checkWinner(); //checking if someoone is winning
  });
});
let checkWinner = () => {
  for (let pattern of winPatterns) {
    //win patter ma check garna
    //since pattern is allay the arays patteren[0] print all value at that index and so on
    // now pass the index thorugh boxes and check through each boxes from 0 to 8
    // .innertext=display waht was clicked

    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1); //as fisrt position is equal to all and is winner
        showWinner(pos1);
      }
    }
  }
};
let msg = document.querySelector(".dis");

showWinner = (winner) => {
  msg.innerText = `Congratulation winner is ${winner}`;
  disboxes();
};
const disboxes = () => {
  // we made a function to disable alll the boxes after showwinner
  for (box of boxes) {
    box.disabled = true;
  }
};
