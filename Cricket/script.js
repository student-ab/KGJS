const show = ()=>{

  const userchoicmsg = "you choosen bat";

  let randomNumber = Math.random() * 3;
  let computerchoice
  if (randomNumber > 0 && randomNumber <= 1) {
     computerchoice = 'bat';
    // console.log("you choosen bat");
                 
    
  }
  else  if (randomNumber > 1 && randomNumber <= 2) {
     computerchoice = 'ball';
    // console.log("you choosen ball");

    
  }
  else {
    computerchoice = 'stump';
    // console.log("you choosen stump");

    
  }
  const computerchocing = `computer choice is ${computerchoice}`;
  let resultmsg;


  if ( computerchoice === 'ball') {
   resultmsg = "User won";
    
  }
  else if ( computerchoice === 'bat') {
    resultmsg = "its a tie";
    
  }
  else if ( computerchoice === 'stump') {
    resultmsg = "computer won";
    
  }
 alert(`you have chosen ${userchoicmsg}.computer choice is  ${computerchocing} and ${resultmsg}`);

}



const showball = ()=>{

  const userchoicmsg = "ball";

  let randomNumber = Math.random() * 3;
  let computerchoice
  if (randomNumber > 0 && randomNumber <= 1) {
     computerchoice = 'bat';
    // console.log("you choosen bat");

    
  }
  else  if (randomNumber > 1 && randomNumber <= 2) {
     computerchoice = 'ball';
    // console.log("you choosen ball");

    
  }
  else {
    computerchoice = 'stump';
    // console.log("you choosen stump");

    
  }
  const computerchocing = ` ${computerchoice}`;
  let resultmsg;


  if ( computerchoice === 'ball') {
   resultmsg = "its was ite";
    
  }
  else if ( computerchoice === 'bat') {
    resultmsg = "computer won";
    
  }
  else if ( computerchoice === 'stump') {
    resultmsg = "you won";
    
  }
 alert(`you have chosen ${userchoicmsg}.computer choice is  ${computerchocing} and ${resultmsg}`);

}



const showstump = ()=>{

  const userchoicmsg = "stump";

  let randomNumber = Math.random() * 3;
  let computerchoice
  if (randomNumber > 0 && randomNumber <= 1) {
     computerchoice = 'bat';
    // console.log("you choosen bat");

    
  }
  else  if (randomNumber > 1 && randomNumber <= 2) {
     computerchoice = 'ball';
    // console.log("you choosen ball");

    
  }
  else {
    computerchoice = 'stump';
    // console.log("you choosen stump");

    
  }
  const computerchocing = ` ${computerchoice}`;
  let resultmsg;


  if ( computerchoice === 'ball') {
   resultmsg = "computer won";
    
  }
  else if ( computerchoice === 'bat') {
    resultmsg = "you won";
    
  }
  else if ( computerchoice === 'stump') {
    resultmsg = "its is tie";
    
  }
 alert(`you have chosen ${userchoicmsg}.computer choice is  ${computerchocing} and ${resultmsg}`);

}
let num = 'abhishek';
let check = num = ' abhishek'?'true':'false' // ternary operator in jj
console.log(check);