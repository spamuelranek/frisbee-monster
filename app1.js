function aliensG() {
    let userAnswer = prompt("Do you like aliens?")
        if(userAnswer.toLowerCase() == "yes"){
            document.getElementById("promptA").innerHTML = " A Learned Person";

        } else if(userAnswer.toLowerCase() == "no"){
            document.getElementById("promptA").innerHTML = " A soon to be Convert";
        }
}

function centralAnswer() {
    let whereAnswer = document.getElementById("centralPrompt").value
    let correctWhereanswer = "central park"
    console.log(whereAnswer)
        if(whereAnswer.toLowerCase() !== correctWhereanswer ){
            document.getElementById("centralAnswer").innerHTML = "Try Again";

        }
        else if(whereAnswer.toLowerCase() == correctWhereanswer ){
            document.getElementById("centralAnswer").innerHTML = "That's Correct"
        }

}

function bigAnswer() {
    let sizeAnswer = document.getElementById("frisbeePrompt").value
    let correctSizeanswer = "60"
    console.log(sizeAnswer)
        if(sizeAnswer !== correctSizeanswer ){
            document.getElementById("frisbeeAnswer").innerHTML = "Try Again";

        }
        else if(sizeAnswer == correctSizeanswer ){
            document.getElementById("frisbeeAnswer").innerHTML = "That's Correct"
        }

}


function cAnswer() {
    let correctAnswer = "a" ;
    let whereAnswer = prompt( "Where did the item land");
    console.log(whereAnswer)
    while(whereAnswer.toLowerCase() == correctAnswer){
        if(whereAnswer.toLocaleLowerCase () == correctAnswer){
            alert(" That's Correct");
            console.log("success");
            break;
        } else if(whereAnswer.toLowerCase() !== correctAnswer){
            alert(" Try Again");
            whereAnswer = prompt( "Where did the item land");
        }
    }

        
}
