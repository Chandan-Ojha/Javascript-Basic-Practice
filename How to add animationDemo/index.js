for(var i=0;i<3;i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){
        var text=this.innerHTML;
        console.log(text);
        audioPlay(text)
      
    });
}

function audioPlay(text){

    switch(text){
        case "a":
            var audio=new Audio("sounds/a.mp3");
            audio.play();
            break;

        case "b":
            var audio=new Audio("sounds/b.mp3");
            audio.play();
            break;

        case "c":
            var audio=new Audio("sounds/c.mp3");
            audio.play();
            break;
    }

}

function playAnimation(text){

  var selectedButton = document.querySelector("."+text);
  selectedButton.classList.add("anim");

  setTimeout(function(){
    selectedButton.classList.remove("anim");
  },1000);


}