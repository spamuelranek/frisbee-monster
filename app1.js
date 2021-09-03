function aliensG() {
    let userAnswer = prompt("Do you like aliens?")
        if(userAnswer.toLowerCase() == "yes"){
            document.getElementById("promptA").innerHTML = " A Learned Person";

        } else if(userAnswer.toLowerCase() == "no"){
            document.getElementById(promptA).innerHTML = " A soon to be Convert";
        }
}

// function centralAnswer() {
//     let whereAnswer = document.getElementById("centralPrompt").value
//     console.log(whereAnswer)
//     while(whereAnswer.toLowerCase() == "central park"){

//         if(whereAnswer.toLowerCase() !== "central park"){
//             document.getElementById("centralAnswer").innerHTML = "Try Again";

//         }
//             document.getElementById("centralAnswer").innerHTML = "That's Correct"

//     }
// }

function cAnswer() {
    let whereAnswer = prompt( "Where did the item land")
    console.log(whereAnswer)
    while(whereAnswer.toLowerCase() !== "central park"){
        if(whereAnswer.toLocaleLowerCase () == "central park"){
            alert(" That's Correct");
            console.log("success")
            break;
        } else if(whereAnswer.toLowerCase() !=="central park"){
            alert(" Try Again");
            whereAnswer = prompt( "Where did the item land") 
        }
    }

        
}