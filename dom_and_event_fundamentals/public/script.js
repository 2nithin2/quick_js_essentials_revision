function switchOFF(){
document.getElementById("bulbImage").src=("assets/images/bulb-go-off-img.png");
document.getElementById("catImage").src=("assets/images/cat-eyes-img.png");
document.getElementById("switchStatus").textContent="Switched off";
document.getElementById("offSwitch").style.backgroundColor="grey";
document.getElementById("onSwitch").style.backgroundColor="green";
}
function switchON(){
    document.getElementById("bulbImage").src=("assets/images/bulb-go-on-img.png");
    document.getElementById("catImage").src=("assets/images/cat-img.png");
    document.getElementById("switchStatus").textContent="Switched ON";
    document.getElementById("offSwitch").style.backgroundColor="red";
    document.getElementById("onSwitch").style.backgroundColor="grey";
    }
