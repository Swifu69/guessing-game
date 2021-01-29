let button = document.getElementById (`btn`)
let answer = document.getElementById (`outputAlert`)


let numberValue = [Math.floor(Math.random() *100)]

btn.addEventListener(`click`, function(){
    let input = document.getElementById(`userCharacter`).value;
    if (input == numberValue){
    answer.innerHTML = `Congratulations, you guessed the right number that was ${numberValue}`
}else if (input < numberValue){
    answer.innerHTML = "Too low!"
}
if (input > numberValue){
    answer.innerHTML = "Too high!"
};
});
