let button = document.getElementById (`btn`)
let answer = document.getElementById (`outputAlert`)


let numberValue = [Math.floor(Math.random() *100)]

    
    document.querySelector("form").addEventListener("submit", e=> {
    e.preventDefault();
    let input = document.getElementById(`userCharacter`).value;
    if (input == numberValue){
    answer.innerHTML = `Congratulations, you guessed the right number that was ${numberValue}`
    document.getElementById (`outputAlert`).style.color=("purple")
}else if (input < numberValue){
    answer.innerHTML = "Too low!"
    document.getElementById (`outputAlert`).style.color=("Blue")
}
if (input > numberValue){
    answer.innerHTML = "Too high!"
    document.getElementById (`outputAlert`).style.color=("red")
};
})

