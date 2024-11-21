let counterElement = document.getElementById("counterValue");
//get present value
//present value to parse using parseInt() artmetic op
//if upd valu>0 green,updvalue=0 black, updvalue<0 red color of countervalue
// p

function onIncrement() {
  let presentValue=document.getElementById("counterValue");//
  let updvalue=parseInt(presentValue.textContent)+1;
  presentValue.textContent=updvalue;
  setColor(updvalue)

}

function onDecrement() {
    let presentValue=document.getElementById("counterValue");
    let updvalue=parseInt(presentValue.textContent)-1;
    presentValue.textContent=updvalue
    setColor(updvalue)
}

function onReset() {
    let presentValue=document.getElementById("counterValue");
    presentValue.textContent=0;
    presentValue.style.color="black";
      
}
function setColor(value){
    if (value>0){
        counterElement.style.color="green";
    }
    else if (value<0){
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
}