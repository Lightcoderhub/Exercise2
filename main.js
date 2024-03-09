//Creating a Snake Water Gun Game
//ask user to Enter S,W or G
function letsplay() {
  let UserInput = prompt("Enter S for Snake,W for Water or G for Gun");
  const alphabet = "SWG";
  const randomchar = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(randomchar);

  if (randomchar === "S" || "W" || "G") {
    if (randomchar === "S") {
      if (randomchar === UserInput) {
        alert("Its Snake:Tie");
        // console.log(randomchar);
      } else if (UserInput === "W") {
        alert("Snake Drinks the Water");
        // console.log(randomchar);
      } else if (UserInput === "G") {
        alert("Gun Kills The Snake: User Won");
      }
    } else if (randomchar === "W") {
      if (UserInput === randomchar) {
        alert("Its Water:Tie");
        // console.log(randomchar);
      } else if (UserInput === "G") {
        alert("Gun to Water:No harm!!");
      } else if (UserInput === "S") {
        alert("Snake Drinks the Water");
      }
    }
    else if (randomchar==="G") {
        if (UserInput===randomchar) {
            alert("Its Gun:Tie");
        }
        else if (UserInput==="S") {
            alert("Gun Kills The Snake");
        }
        else if(UserInput==="W")
        alert("Gun to Water:No Harm!!");
    }
  } else {
    alert("Wrong Input");
  }
}
