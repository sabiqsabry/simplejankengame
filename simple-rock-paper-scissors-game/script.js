function userChoice(anjiisafool){
    console.log(anjiisafool);
    console.log(anjiisafool.id);

    let peopleChoice = anjiisafool.id;
    let compChoice = whatstheOption(randomVal());
    console.log(compChoice);

    if (peopleChoice == compChoice){
        console.log("Tie");

        let h1 = document.createElement("h1");
        let textt = document.createTextNode("Tie");

        h1.setAttribute("id", "thegameisTied");
        h1.appendChild(textt);
        document.getElementById("flex-box-result").appendChild(h1);
    }else{
        alert("Try Again");
    }

}

function randomVal(){
    return Math.floor(Math.random() * 3);
}

function whatstheOption(num){
    return ["rock", "paper", "scissor"][num]
}

function resetGame(){
    document.getElementById("thegameisTied").remove();
}

