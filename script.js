var character = document.getElementById("character");
document.addEventListener("keypress",jump);
function jump(){
    if(character.classList == "animate"){return;}
    character.classList.add("animate");
    setTimeout(removeJump,300); //300ms = length of animation
};
function removeJump(){
    character.classList.remove("animate");
}

var block = document.getElementById("block");
function checkDead(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        alert("Game over");
    }
}

setInterval(checkDead, 10);

LogRocket.init();
// This is an example script - don't forget to change it!
LogRocket.identify('q0medy/game', {
  name: 'Thomas Robinson',
  email: 'tjrobinson693@bullochschools.org',

  // Add your own custom user variables here, ie:
  subscriptionType: 'members'
});
LogRocket.captureMessage('Something is wrong!', {
  tags: {
    // additional data to be grouped as "tags"
    subscription: 'members',
  },
  extra: {
    // additional arbitrary data associated with the event
    pageName: 'ProfileView',
  },
});
