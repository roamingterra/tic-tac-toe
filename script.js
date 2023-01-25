// Control flow of game object (module?)
//      Player X turn
//      Check for winner function
//      Player Y turn
//      Check for winner funciton

// Player factory function
const playerFactory = (name, icon) => {
  const playerName = () => name;
  const playerIcon = document.createElement("img");
  playerIcon.src = icon;
  let score = 0;

  return { playerName, playerIcon, score };
};
// Player X object created from factory function
const playerX = playerFactory("X", "images/x-icon.png");
// Player O object created from factory function
const playerO = playerFactory("O", "images/o-icon.png");

// Gameboard module (I WAS TRYING TO STORE ALL GAME BLOCKS IN THE ARRAY, BUT I REALIZED I'M NOT STORING OBJECTS. I HAVE TO RETHINK THIS)
// const gameBoard = (() => {
//     let gameBoard = []
//     const board = document.querySelector(".game-board");
//     for(let i=0; i < board.childNodes.length; i++){
//         let child = board.childNodes[i];
//         for(let j=0; j < child.childNodes.length; i++){

//         }
//     }
//     const block1 = document.querySelector()
// })();
//      gameboard array

// Add marker to board function, onclick attribute function that places icon in chosen spot

// Check for winner function

// Restart game function
