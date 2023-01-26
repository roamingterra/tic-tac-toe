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

// Block factory function
const blockFactory = () => {
  let blockStatus = "empty";

  return { blockStatus };
};

// Gameboard module (Make each block an object based on block factory function, then store them in array)

const gameBoard = (() => {
  let gameBoardBlocks = [];
  const board = document.querySelector(".game-board");
  for (let i = 0; i < board.children.length; i++) {
    let child = board.children[i];
    for (let j = 0; j < child.children.length; j++) {
      let block = blockFactory();
      gameBoardBlocks.push(block);
    }
  }
  return { gameBoardBlocks };
})();

// Add marker to board function, onclick attribute function that places icon in chosen spot
function changeBlockStatus(event) {
  // Check block status
  const regExp = /[0-9]$/;
  const blockNumber = event.target.className.match(regExp);
  console.log(blockNumber);
  console.log(gameBoard.gameBoardBlocks[blockNumber - 1].blockStatus);

  // Change block status
  if (gameBoard.gameBoardBlocks[blockNumber - 1].blockStatus === "empty") {
    gameBoard.gameBoardBlocks[blockNumber - 1].blockStatus = "not empty"; //This will be changed once game flow is established
    console.log(gameBoard.gameBoardBlocks[blockNumber - 1].blockStatus);
  }
  // Insert player marker
}

// Check for winner function

// Restart game function

// Test
