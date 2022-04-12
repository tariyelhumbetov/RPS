var values = ['r', 'p', 's']
var player1score = 0;
var player2score = 0;
var player1img = document.querySelector("#player1img");
var player2img = document.querySelector("#player2img");
var player1point = document.querySelector("#player1point");
var player2point = document.querySelector("#player2point");
var player1value = document.querySelector("#player1value");
var player2value = document.querySelector("#player2value");


function compChoise(arr) {

    var randomLetter = Math.floor(Math.random() * arr.length);

    return arr[randomLetter]

}




function startGame(e) {

    var myValue = e.key
    var compValue = compChoise(values);


    if (values.indexOf(myValue) === -1) {
        alert("Zehmet olmasa R,P ve ya S herflerinden birini secin")
        return
    }
    player1img.src = `./images/${myValue}.png`
    player2img.src = `./images/${compValue}.png`




    if (myValue === "p" && compValue === "r") {
        player1score++
        player1point.innerHTML = `Score ${player1score}`
        
        player1value.innerHTML = "WIN";
        player2value.innerHTML = "LOSE";
        console.log("user win");
    } else if (myValue === "r" && compValue === "s") {
        player1score++
        player1point.innerHTML = `Score ${player1score}`
        
        player1value.innerHTML = "WIN";
        player2value.innerHTML = "LOSE";
        console.log("user win");
    } else if (myValue === "s" && compValue === "p") {
        player1score++
        player1point.innerHTML = `Score ${player1score}`
        
        player1value.innerHTML = "WIN";
        player2value.innerHTML = "LOSE";
        console.log("user win");
    } else if (myValue === compValue) {
    
        player1value.innerHTML = "DRAW";
        player2value.innerHTML = "DRAW";
        console.log("draw")
    } else {
        player2score++
        
        player2point.innerHTML = `Score ${player2score}`
        player1value.innerHTML = "LOSE";
        player2value.innerHTML = "WIN";
        console.log("comp win")
    }

    if(player1score === 5 && player2score<player1score){
        
        alert("USER WIN !!!!!!!!");
    }else if(player2score === 5 && player1score<player2score){
        
        alert("COMPUTER WIN !!!!!!!!");
    }
}

window.onkeydown = startGame
