let newGame = confirm('Do you want to play a game?'),
    continueGame = false;
let minNumber = 0,
    maxNumber = 8,
    randomNumber = 0,
    userNumber = 0,
    userPrize1 = 25,
    userPrize2 = 50,
    userPrize3 = 100,
    userPrize = 0,
    wonPrize = 0,
    continueNum = 1;


continueG: while(continueGame || newGame) {
   randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
   console.log(randomNumber);
   for (let i = 0; i < 3; i++) {
       switch (i) {
           case 0:
               userPrize = userPrize3 * continueNum;
               break;
           case 1:
               userPrize = userPrize2 * continueNum;
               break;
           case 2:
               userPrize = userPrize1 * continueNum;
               break;
           default:
               userPrize = 0;
       }
       userNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to ${maxNumber} ` +
           `\n Attempts left: ${3 - i}
            \n Total prize: ${wonPrize}$
            \n Possible prise on current attempt: ${userPrize}$`

           ,''));
       if (userNumber === '' || isNaN(userNumber) || userNumber === null) {
           break;
       }

       if (userNumber === randomNumber) {
           wonPrize += userPrize;
           alert(`Congratulation, you won!   Your prize is: ${wonPrize} $. `)
           continueGame = confirm('Do you want to continue?');
           console.log('continue' + continueGame);
           if(continueGame) {
               continueNum *= 2;
               maxNumber += 4;
               continue continueG;
           } else {
               alert(`Thank you for your participation. Your prize is: ${wonPrize} $`);
               break;
           }
       } else if (i === 2) {
           alert(`Thank you for your participation. Your prize is: ${wonPrize} $`);
       }
   }

    newGame = confirm('Do you want to play again?');
    if(!newGame) {
       break;
   }
}

if(!newGame) {
    alert('You did not become a billionaire, but can.');
}