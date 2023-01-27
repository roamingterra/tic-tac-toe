// Player factory function
const playerFactory = (name, icon, turn) => {
  const playerName = name;
  const playerIcon = document.createElement("img");
  playerIcon.src = icon;
  playerIcon.style.width = "30px";
  let myTurn = turn;
  let score = 0;

  return { playerName, playerIcon, myTurn, score };
};
// Player X object created from factory function
const playerX = playerFactory("X", "images/x-icon.png", true);
// Player O object created from factory function
const playerO = playerFactory("O", "images/o-icon.png", false);

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

// Control flow of game object module
const gameFlow = (() => {
  let continueGame = true;
  const blocks = document.querySelectorAll(".block");

  blocks.forEach((block) => {
    block.addEventListener("click", changeBlockStatus);
  });
  //      Check for winner function
})();

function changeBlockStatus(event) {
  // Check block status
  const regExp = /[0-9]$/;
  const blockNumber = event.target.className.match(regExp);
  // console.log(blockNumber);
  // console.log(gameBoard.gameBoardBlocks[blockNumber - 1].blockStatus);

  // Change block status
  if (gameBoard.gameBoardBlocks[blockNumber - 1].blockStatus === "empty") {
    if (playerX.myTurn) {
      gameBoard.gameBoardBlocks[blockNumber - 1].blockStatus =
        playerX.playerName;
      // Change turns
      playerX.myTurn = false;
      playerO.myTurn = true;
      // console.log(gameBoard.gameBoardBlocks[blockNumber - 1].blockStatus);
    } else if (playerO.myTurn) {
      gameBoard.gameBoardBlocks[blockNumber - 1].blockStatus =
        playerO.playerName;
      // Change turns
      playerX.myTurn = true;
      playerO.myTurn = false;
      // console.log(gameBoard.gameBoardBlocks[blockNumber - 1].blockStatus);
    }

    // Call new add marker function
    addMarker(blockNumber);
  }
}

// Add marker to board function
function addMarker(blockNumber) {
  let block = document.getElementById(blockNumber);
  let blockMarker = "";
  if (
    gameBoard.gameBoardBlocks[blockNumber - 1].blockStatus ===
    playerX.playerName
  ) {
    blockMarker = playerX.playerIcon;
  } else if (
    gameBoard.gameBoardBlocks[blockNumber - 1].blockStatus ===
    playerO.playerName
  ) {
    blockMarker.src = playerO.playerIcon;
    blockMarker = playerO.playerIcon;
  }

  block.appendChild(blockMarker);
}

// Check for winner function

// Restart game function

// Test
