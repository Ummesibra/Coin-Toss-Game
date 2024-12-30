function Toss(){
    let coin = Math.floor(Math.random()*2);
    if(coin === 0){
        document.getElementById("result").innerHTML = "Head!";
    }
    else{
        document.getElementById("result").innerHTML ="Tail!"
}
}