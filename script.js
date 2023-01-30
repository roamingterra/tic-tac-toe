// Arrays to hold tic tac toe spaces, and players
let gameBoardBlocks = [];
let players = [];

// Player factory function
const playerFactory = (playerName, icon, turn) => {
  const getPlayerName = () => playerName; // get functions accesses the value of the property
  const getPlayerIcon = () => icon; // Also, arrow functions automatically return a value when there is one statement
  let getMyTurn = () => turn;
  let score = 0;
  const setScore = () => score++;
  const getScore = () => score;

  let changeTurns = () => {
    // And this would be a setter function, setting the value of the property
    if (turn === true) {
      turn = false;
    } else if (turn === false) {
      turn = true;
    }
  };

  const resetTurn = (resetTurn) => {
    turn = resetTurn;
  };

  return {
    // Note: JavaScript is always pass-by-value. This is why we need setters to change property values, and getters to access the values of those properties. Without the getter, the returned property value is always the original declared value
    getPlayerName,
    getPlayerIcon,
    getMyTurn,
    setScore,
    getScore,
    changeTurns,
    resetTurn,
  };
};

const playerX = playerFactory("x", "images/x-icon.png", true); // Player X starts
players.push(playerX);

const playerO = playerFactory("o", "images/o-icon.png", false); // Player O does not start
players.push(playerO);

// Block factory function
const blockFactory = (blockStatus, blockNumber) => {
  let blockMarker = document.createElement("img");

  const getBlockStatus = () => blockStatus;

  const resetBlockStatus = () => (blockStatus = "empty");

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

  const removeMarker = () => {
    blockMarker.removeAttribute("src", "");
  };

  return {
    getBlockStatus,
    resetBlockStatus,
    changeBlockStatus,
    addMarker,
    removeMarker,
  };
};

// GameBoard module
const gameBoard = (() => {
  // Method that makes 9 block object and stores them in gameBoardBlocks array
  const createBlockObjects = () => {
    const board = document.querySelector(".game-board");
    for (let i = 0; i < board.children.length; i++) {
      let child = board.children[i];
      for (let j = 0; j < child.children.length; j++) {
        let block = blockFactory("empty", i * 3 + (j + 1));
        gameBoardBlocks.push(block);
      }
    }
  };

  // Method that shows it is the appropriate players turn
  let highlightPlayer = () => {
    let playerXScore = document.querySelector(".x-score");
    let playerOScore = document.querySelector(".o-score");
    let currentPlayerTurn = document.querySelector(".current-player-turn");

    if (playerX.getMyTurn() === true) {
      currentPlayerTurn.textContent = "X Turn";

      playerXScore.style.borderBottomColor = "#22c55e";
      playerXScore.style.borderBottomWidth = "5px";

      playerOScore.style.borderBottomColor = "#737373";
      playerOScore.style.borderBottomWidth = "2px";
    } else if (playerO.getMyTurn() === true) {
      currentPlayerTurn.textContent = "O Turn";

      playerXScore.style.borderBottomColor = "#737373";
      playerXScore.style.borderBottomWidth = "2px";

      playerOScore.style.borderBottomColor = "#22c55e";
      playerOScore.style.borderBottomWidth = "5px";
    }
  };

  const checkWinner = () => {
    if (
      gameBoardBlocks[0].getBlockStatus() ===
        gameBoardBlocks[1].getBlockStatus() &&
      gameBoardBlocks[1].getBlockStatus() ===
        gameBoardBlocks[2].getBlockStatus() &&
      gameBoardBlocks[0].getBlockStatus() !== "empty" &&
      gameBoardBlocks[1].getBlockStatus() !== "empty" &&
      gameBoardBlocks[2].getBlockStatus() !== "empty"
    ) {
      return gameBoardBlocks[0].getBlockStatus();
    } else if (
      gameBoardBlocks[3].getBlockStatus() ===
        gameBoardBlocks[4].getBlockStatus() &&
      gameBoardBlocks[4].getBlockStatus() ===
        gameBoardBlocks[5].getBlockStatus() &&
      gameBoardBlocks[3].getBlockStatus() !== "empty" &&
      gameBoardBlocks[4].getBlockStatus() !== "empty" &&
      gameBoardBlocks[5].getBlockStatus() !== "empty"
    ) {
      return gameBoardBlocks[3].getBlockStatus();
    } else if (
      gameBoardBlocks[6].getBlockStatus() ===
        gameBoardBlocks[7].getBlockStatus() &&
      gameBoardBlocks[7].getBlockStatus() ===
        gameBoardBlocks[8].getBlockStatus() &&
      gameBoardBlocks[6].getBlockStatus() !== "empty" &&
      gameBoardBlocks[7].getBlockStatus() !== "empty" &&
      gameBoardBlocks[8].getBlockStatus() !== "empty"
    ) {
      return gameBoardBlocks[6].getBlockStatus();
    } else if (
      gameBoardBlocks[0].getBlockStatus() ===
        gameBoardBlocks[3].getBlockStatus() &&
      gameBoardBlocks[3].getBlockStatus() ===
        gameBoardBlocks[6].getBlockStatus() &&
      gameBoardBlocks[0].getBlockStatus() !== "empty" &&
      gameBoardBlocks[3].getBlockStatus() !== "empty" &&
      gameBoardBlocks[6].getBlockStatus() !== "empty"
    ) {
      return gameBoardBlocks[0].getBlockStatus();
    } else if (
      gameBoardBlocks[1].getBlockStatus() ===
        gameBoardBlocks[4].getBlockStatus() &&
      gameBoardBlocks[4].getBlockStatus() ===
        gameBoardBlocks[7].getBlockStatus() &&
      gameBoardBlocks[1].getBlockStatus() !== "empty" &&
      gameBoardBlocks[4].getBlockStatus() !== "empty" &&
      gameBoardBlocks[7].getBlockStatus() !== "empty"
    ) {
      return gameBoardBlocks[1].getBlockStatus();
    } else if (
      gameBoardBlocks[2].getBlockStatus() ===
        gameBoardBlocks[5].getBlockStatus() &&
      gameBoardBlocks[5].getBlockStatus() ===
        gameBoardBlocks[8].getBlockStatus() &&
      gameBoardBlocks[2].getBlockStatus() !== "empty" &&
      gameBoardBlocks[5].getBlockStatus() !== "empty" &&
      gameBoardBlocks[8].getBlockStatus() !== "empty"
    ) {
      return gameBoardBlocks[2].getBlockStatus();
    } else if (
      gameBoardBlocks[0].getBlockStatus() ===
        gameBoardBlocks[4].getBlockStatus() &&
      gameBoardBlocks[4].getBlockStatus() ===
        gameBoardBlocks[8].getBlockStatus() &&
      gameBoardBlocks[0].getBlockStatus() !== "empty" &&
      gameBoardBlocks[4].getBlockStatus() !== "empty" &&
      gameBoardBlocks[8].getBlockStatus() !== "empty"
    ) {
      return gameBoardBlocks[0].getBlockStatus();
    } else if (
      gameBoardBlocks[2].getBlockStatus() ===
        gameBoardBlocks[4].getBlockStatus() &&
      gameBoardBlocks[4].getBlockStatus() ===
        gameBoardBlocks[6].getBlockStatus() &&
      gameBoardBlocks[2].getBlockStatus() !== "empty" &&
      gameBoardBlocks[4].getBlockStatus() !== "empty" &&
      gameBoardBlocks[6].getBlockStatus() !== "empty"
    ) {
      return gameBoardBlocks[2].getBlockStatus();
    }
  };

  const checkDraw = () => {
    let isDraw = true;
    for (let i = 0; i < gameBoardBlocks.length; i++) {
      if (gameBoardBlocks[i].getBlockStatus() === "empty") {
        isDraw = false;
        return isDraw;
      }
    }
    return isDraw;
  };

  const updateScore = (winner) => {
    let winnerObjectInArray;
    if (winner === players[0].getPlayerName()) {
      winnerObjectInArray = 0;
      players[0].setScore();
    } else if (winner === players[1].getPlayerName()) {
      winnerObjectInArray = 1;
      players[1].setScore();
    }

    const winnerScore = document.querySelector(
      "." + winner + "-score > span:nth-child(2)"
    );

    winnerScore.textContent = players[winnerObjectInArray].getScore();
  };

  const showWinner = (winner) => {
    const gameBoard = document.querySelector(".game-board");
    const xWinnerMessage = document.querySelector(".x-winner");
    const oWinnerMessage = document.querySelector(".o-winner");
    const currentPlayerTurn = document.querySelector(".current-player-turn");

    currentPlayerTurn.textContent = "Game Over";
    gameBoard.style.display = "none";

    if (winner === "x") {
      xWinnerMessage.style.display = "flex";
    } else if (winner === "o") {
      oWinnerMessage.style.display = "flex";
    }
  };

  const showDraw = () => {
    const gameBoard = document.querySelector(".game-board");
    const drawMessage = document.querySelector(".draw");
    const currentPlayerTurn = document.querySelector(".current-player-turn");

    currentPlayerTurn.textContent = "Game Over";
    gameBoard.style.display = "none";
    drawMessage.style.display = "flex";
  };

  const showBoard = () => {
    const gameBoard = document.querySelector(".game-board");
    const xWinnerMessage = document.querySelector(".x-winner");
    const oWinnerMessage = document.querySelector(".o-winner");
    const drawMessage = document.querySelector(".draw");

    gameBoard.style.display = "flex";
    xWinnerMessage.style.display = "none";
    oWinnerMessage.style.display = "none";
    drawMessage.style.display = "none";
  };

  const resetBlockStatuses = () => {
    for (let i = 0; i < gameBoardBlocks.length; i++) {
      gameBoardBlocks[i].resetBlockStatus();
    }
  };

  const removeMarkers = () => {
    for (let i = 0; i < gameBoardBlocks.length; i++) {
      gameBoardBlocks[i].removeMarker();
    }
  };

  const resetTurns = () => {
    players[0].resetTurn(true);
    players[1].resetTurn(false);
  };

  return {
    createBlockObjects,
    highlightPlayer,
    checkWinner,
    checkDraw,
    updateScore,
    showWinner,
    showDraw,
    showBoard,
    resetBlockStatuses,
    removeMarkers,
    resetTurns,
  };
})();

// gameFlow module to control the progress of the game
const gameFlow = (() => {
  let winner = "";
  const blocks = document.querySelectorAll(".block");
  const reset = document.querySelector("#reset");

  // Create block objects
  gameBoard.createBlockObjects();

  // Show who's turn it is at the beginning of the game
  gameBoard.highlightPlayer();

  blocks.forEach((block) => {
    block.addEventListener("click", (event) => {
      const blockNumber = event.target.id;
      // Check to see if element clicked is an empty block and not a newly created player marker or a filled block
      if (
        blockNumber &&
        gameBoardBlocks[blockNumber - 1].getBlockStatus() === "empty"
      ) {
        // Change block status
        gameBoardBlocks[blockNumber - 1].changeBlockStatus();
        // Change turn status for all players
        players[0].changeTurns();
        players[1].changeTurns();
        // Add player marker to block
        gameBoardBlocks[blockNumber - 1].addMarker();

        // Check for winner
        if (gameBoard.checkWinner()) {
          winner = gameBoard.checkWinner();
          gameBoard.updateScore(winner);
          gameBoard.showWinner(winner);
          winner = "";
          return 0;
        }

        // Check for draw
        if (gameBoard.checkDraw()) {
          gameBoard.showDraw();
          return 0;
        }

        // Change highlighted player after turns switch
        gameBoard.highlightPlayer();
      }
    });
  });

  reset.addEventListener("click", () => {
    gameBoard.resetBlockStatuses();
    gameBoard.removeMarkers();
    gameBoard.showBoard();
    gameBoard.resetTurns();

    // Reset highlighted players
    gameBoard.highlightPlayer();
  });
})();
