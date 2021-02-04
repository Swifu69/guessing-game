let button = document.getElementById (`btn`)
let answer = document.getElementById (`outputAlert`)


let numberValue = [Math.floor(Math.random() *100)]

    
    document.querySelector("form").addEventListener("submit", e=> {
    e.preventDefault();
    let input = document.getElementById(`userCharacter`).value;
    if (input == numberValue){
    answer.innerHTML = `Congratulations, you guessed the right number that was ${numberValue}`
    document.getElementById (`outputAlert`).style.color=("purple")
    document.getElementById (`right`).play();
}else if (input < numberValue){
    answer.innerHTML = "Too low!" 
    document.getElementById (`outputAlert`).style.color=("Blue")
    document.getElementById (`wrong`).play();
}
if (input > numberValue){
    answer.innerHTML = "Too high!"
    document.getElementById (`outputAlert`).style.color=("red")
    document.getElementById (`wrong`).play();
   };
if (isNaN(input)){
    answer.innerHTML = "Please use numbers"
    document.getElementById (`outputAlert`).style.color=("green")
    document.getElementById (`win-sound`).play();
}
})

 

let playIcon = document.getElementById ("playIcon");
let sang = document.getElementById ("sang");

playIcon.onclick = function(){
    if(document.getElementById(`sang`).paused){
        document.getElementById(`sang`).play();
    }else{
        document.getElementById(`sang`).pause();
    }
};
