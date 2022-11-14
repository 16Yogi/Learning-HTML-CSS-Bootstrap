
// function teamNavBarOn(){
//     document.getElementById("on-nav").style.display="block";
// }

function teamNavBarOn(){
    document.getElementById("on-nav").style.display="block";
    document.getElementById("open").style.display="none";
    document.getElementById("close").style.display="block";
}

function teamNavBarOff(){
    document.getElementById("on-nav").style.display="none";
    document.getElementById("open").style.display="block";
    document.getElementById("close").style.display="none";
}


if(teamNavBarOn()==teamNavBarOff()){
   document.getElementById("open");
}else{
    document.getElementById("close");
}