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

const attemptsLength = 3,
    largerMax = 4,
    largerConttinueNum = 2,
    lastAttempt = 2;


continueG: while(continueGame || newGame) {
   randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
   for (let i = 0; i < attemptsLength; i++) {
       switch (i) {
           case 0:
               userPrize = userPrize3 * continueNum;
               break;
           case 1:
               userPrize = userPrize2 * continueNum;
               break;
           case lastAttempt:
               userPrize = userPrize1 * continueNum;
               break;
           default:
               userPrize = 0;
       }
       userNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to ${maxNumber} ` +
           `\n Attempts left: ${attemptsLength - i}
            \n Total prize: ${wonPrize}$
            \n Possible prise on current attempt: ${userPrize}$`

           ,''));

       if (userNumber === randomNumber) {
           wonPrize += userPrize;
           alert(`Congratulation, you won!   Your prize is: ${wonPrize} $. `)
           continueGame = confirm('Do you want to continue?');
           if(continueGame) {
               continueNum *= largerConttinueNum;
               maxNumber += largerMax;
               continue continueG;
           } else {
               alert(`Thank you for your participation. Your prize is: ${wonPrize} $`);
               continueGame = false;
               newGame = false;
               break;
           }
       } else if (i === lastAttempt) {
           alert(`Thank you for your participation. Your prize is: ${wonPrize} $`);
           newGame = confirm('Do you want to play again?');

           if (!newGame) {
               break;
           }
       }
   }
}

if(!newGame) {
    alert('You did not become a billionaire, but can.');
}