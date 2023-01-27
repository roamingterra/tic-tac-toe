// Player factory function
const playerFactory = (name, icon, turn) => {
  const playerName = name;
  const playerIcon = icon;
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
  let blockMarker = document.createElement("img");

  return { blockStatus, blockMarker };
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
  const blockNumber = event.target.id;
  let currentBlock = gameBoard.gameBoardBlocks[blockNumber - 1];

  // Change block status
  if (currentBlock.blockStatus === "empty") {
    if (playerX.myTurn) {
      currentBlock.blockStatus = playerX.playerName;
      // Change turns
      playerX.myTurn = false;
      playerO.myTurn = true;
    } else if (playerO.myTurn) {
      currentBlock.blockStatus = playerO.playerName;
      // Change turns
      playerX.myTurn = true;
      playerO.myTurn = false;
    }

    // Call new add marker function
    addMarker(blockNumber);
  }
}

// Add marker to board function
function addMarker(blockNumber) {
  let block = document.getElementById(blockNumber);
  let currentBlock = gameBoard.gameBoardBlocks[blockNumber - 1];
  if (currentBlock.blockStatus === playerX.playerName) {
    currentBlock.blockMarker.src = playerX.playerIcon;
  } else if (currentBlock.blockStatus === playerO.playerName) {
    currentBlock.blockMarker.src = playerO.playerIcon;
  }
  block.appendChild(currentBlock.blockMarker);
  currentBlock.blockMarker.style.width = "30px";
}

// Check for winner function

// Restart game function

// Test
