// Arrays to hold tic tac toe spaces, and players
let gameBoardBlocks = [];
let players = [];

// Player factory function
const playerFactory = (playerName, icon, turn) => {
  getPlayerName = () => playerName; // get functions accesses the value of the property
  const getPlayerIcon = () => icon; // Also, arrow functions automatically return a value when there is one statement
  let getMyTurn = () => turn;
  let score = 0;

  let changeTurns = () => {
    // And this would be a setter function, setting the value of the property
    if (turn === true) {
      turn = false;
    } else if (turn === false) {
      turn = true;
    }
  };

  return {
    // Note: JavaScript is always pass-by-value. This is why we need setters to change property values, and getters to access the values of those properties. Without the getter, the returned property value is always the original declared value
    getPlayerName,
    getPlayerIcon,
    getMyTurn,
    changeTurns,
  };
};

const playerX = playerFactory("x", "images/x-icon.png", true); // Player X starts
players.push(playerX);

const playerO = playerFactory("o", "images/o-icon.png", false); // Player O does not start
players.push(playerO);

// Block factory function
const blockFactory = (blockStatus, blockNumber) => {
  let blockMarker = document.createElement("img");

  let changeBlockStatus = () => {
    if (blockStatus === "empty") {
      if (players[0].getMyTurn()) {
        blockStatus = players[0].getPlayerName();
      } else if (players[1].getMyTurn()) {
        blockStatus = players[1].getPlayerName();
      }
    }
  };

  let addMarker = () => {
    if (blockStatus === "x") {
      // apply block marker source according to block status
      blockMarker.src = playerX.getPlayerIcon();
    } else if (blockStatus === "o") {
      // apply block marker source according to block status
      blockMarker.src = playerO.getPlayerIcon();
    }
    // append blockMarker to element
    document.getElementById(blockNumber).appendChild(blockMarker);
    blockMarker.style.width = "30px";
  };

  return {
    changeBlockStatus,
    addMarker,
  };
};

// Gameboard module to make block objects and store in gameBoardBlocks array
const gameBoard = (() => {
  const board = document.querySelector(".game-board");
  for (let i = 0; i < board.children.length; i++) {
    let child = board.children[i];
    for (let j = 0; j < child.children.length; j++) {
      let block = blockFactory("empty", i * 3 + (j + 1));
      gameBoardBlocks.push(block);
    }
  }
})();

// Style page module to style the page dynamically
const stylePage = (() => {
  // Create function that highlights player when it is their turn
  let highlightPlayer = () => {
    let playerXScore = document.querySelector(".x-score");
    let playerOScore = document.querySelector(".o-score");
    if (playerX.getMyTurn() === true) {
      playerXScore.style.borderBottomColor = "#22c55e";
      playerXScore.style.borderBottomWidth = "5px";

      playerOScore.style.borderBottomColor = "#737373";
      playerOScore.style.borderBottomWidth = "2px";
    } else if (playerO.getMyTurn() === true) {
      playerXScore.style.borderBottomColor = "#737373";
      playerXScore.style.borderBottomWidth = "2px";

      playerOScore.style.borderBottomColor = "#22c55e";
      playerOScore.style.borderBottomWidth = "5px";
    }
  };

  return { highlightPlayer };
})();

// gameFlow module to control the progress of the game
const gameFlow = (() => {
  let continueGame = true;
  const blocks = document.querySelectorAll(".block");

  // Highlight player who's turn it is at the beginning of the game
  stylePage.highlightPlayer();

  blocks.forEach((block) => {
    block.addEventListener("click", (event) => {
      const blockNumber = event.target.id;
      // Check to see if element clicked is a block and not a newly created player marker
      if (blockNumber) {
        // Change block status
        gameBoardBlocks[blockNumber - 1].changeBlockStatus();
        // Change turn status for all players
        players[0].changeTurns();
        players[1].changeTurns();
        // Change highlighted player after turns switch
        stylePage.highlightPlayer();
        // Add player marker to block
        gameBoardBlocks[blockNumber - 1].addMarker();
      }
    });
  });
  //      Check for winner function
})();
