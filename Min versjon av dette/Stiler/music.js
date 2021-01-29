let playIcon = document.getElementById ("playIcon");
let sang = document.getElementById ("sang");

playIcon.onclick = function(){
    if(sang.paused){
        sang.play();
    }else{
        sang.pause();
    }
};
