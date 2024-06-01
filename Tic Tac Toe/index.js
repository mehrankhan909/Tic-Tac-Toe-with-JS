let allBtn = document.querySelectorAll(".btn");
const winnerPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]
let turn = true;
allBtn.forEach((e) => {
    e.addEventListener("click", () =>{
        if(turn){
            e.innerHTML = "X";
            turn = false;
        }
        else{   
            e.innerHTML = "O";
            turn = true;
        }
        e.disabled = true;
        checkWinner();
    })
})
const winner = (winner) =>{
    console.log("You win!", winner);
    document.querySelector("#winner").classList.add("show");
    document.querySelector("#winner").classList.remove("hide");
    document.querySelector("#winner").innerHTML = `Congratulations!<br> The winner is ${winner}`;
}
const checkWinner = () => {
    for(pattern of winnerPattern){
        let pos1 = allBtn[pattern[0]].innerHTML;
        let pos2 = allBtn[pattern[1]].innerHTML;
        let pos3 = allBtn[pattern[2]].innerHTML;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                winner(pos1);
                allBtn.forEach((e) =>{
                    e.disabled = true;
                })
                return;
                
            }
        }
        
    }
}
const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
    allBtn.forEach((e) => {
        e.innerHTML = "";
        e.disabled = false;
    })
    document.querySelector("#winner").classList.add("hide");
    document.querySelector("#winner").classList.remove("show");
})