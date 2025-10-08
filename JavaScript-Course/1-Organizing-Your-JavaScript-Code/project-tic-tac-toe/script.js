// tictactoe assignment

const gameBoard = (function(){
    let board = ["", "", "", "", "", "", "", "", ""]; // 9 empty strings represent the 9 cells of the tic-tac-toe board

    // function to get the current state of the board
    const getBoard = () => board;

    // function to update the board at a specific index with a player's symbol (X or O)
    const updateBoard = (index, mark) => {
        if(index >= 0 && index < 9 && (mark === "X" || mark === "O") && board[index] === ""){
            board[index] = mark;
            return true; // return true if the update was successful
        }
        return false; // return false if the update was not successful
    };

    // function to reset the board to its initial empty state
    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    // return public methods
    return {
        getBoard,
        updateBoard,
        resetBoard
    };
})();

// Player factory function
const Player = (name, mark) => {
    return { name, mark };
};

// Game controller module (handles logic, not the DOM)
const gameController = (Player1 = "Player 1", Player2 = "Player 2") => {
    const board1 = gameBoard; // reference to the gameBoard module
    const player1 = Player(Player1, "X");
    const player2 = Player(Player2, "O");
    let currentPlayer = player1;
    let gameOver = false;

    const isGameOver = () => gameOver;
    const getCurrentPlayer = () => currentPlayer;

    // function to switch the current player
    const switchPlayer = () => {
        currentPlayer = (currentPlayer === player1) ? player2 : player1;
    };

    // function to check for a win or draw
    const checkWin = () => {
        const b2 = board1.getBoard();
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];
        for(const condition of winConditions){
            const [a, b, c] = condition;
            if(b2[a] && b2[a] === b2[b] && b2[a] === b2[c]){
                return `${currentPlayer.name} wins!`;
            }
        }
        if(!b2.includes("")){
            return "It's a draw!";
        }
        return null; // no win or draw
    };

    // function to handle a player's move
    const playMove = (index) => {
        if(gameOver) return "Game is over. Please reset to play again.";
        if(board1.updateBoard(index, currentPlayer.mark)){
            const result = checkWin();
            if(result){
                gameOver = true;
                return result; // return win or draw message
            }
            switchPlayer();
            return "Move accepted. Next player's turn.";
        }
        return "Invalid move. Try again.";
    };

    // function to reset the game
    const resetGame = () => {
        board1.resetBoard();
        currentPlayer = player1;
        gameOver = false;
    };

    // return public methods
    return {
        playMove,
        resetGame,
        getCurrentPlayer: () => currentPlayer.name,
        getBoard: () => board1.getBoard(), // ✅ fixed here
        isGameOver,
        checkWin
    };
};

// The UI module (handles DOM)
document.addEventListener('DOMContentLoaded', () => {
    const UIModule = (function(){
        const cells = document.querySelectorAll('.cell');
        const message = document.getElementById('message');
        const resetButton = document.getElementById('restart'); // get the reset button

        if (!cells.length || !message || !resetButton) {
            console.error("Required DOM elements are missing. Ensure the HTML structure is correct.");
            return;
        }

        const player1Name = prompt("Enter Player 1's name:", "Player 1") || "Player 1";
        const player2Name = prompt("Enter Player 2's name:", "Player 2") || "Player 2";
        const game = gameController(player1Name, player2Name);

        // function to update the UI based on the game state
        const updateUI = () => {
            const board = game.getBoard();
            cells.forEach((cell, index) => {
                cell.textContent = board[index];
            });
            if (game.isGameOver()) {
                const result = game.checkWin() || "It's a draw!"; 
                message.textContent = result;
            } else {
                message.textContent = `${game.getCurrentPlayer()}'s turn`;
            }
        };

        // add event listeners to each cell
        cells.forEach((cell, index) => {
            cell.addEventListener('click', () => {
                if(!game.isGameOver()){
                    const result = game.playMove(index);
                    updateUI();
                    if(result){
                        message.textContent = result;
                    }
                }
            });
        });

        // add event listener to the reset button
        resetButton.addEventListener('click', () => {
            game.resetGame();
            updateUI();
        });

        // initialize the UI
        updateUI();
    })();
});