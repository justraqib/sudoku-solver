const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Sudoku solver using backtracking
function isValid(board, row, col, num) {
    for (let x = 0; x < 9; x++) {
        if (
            board[row][x] === num ||
            board[x][col] === num ||
            board[3 * Math.floor(row / 3) + Math.floor(x / 3)][
                3 * Math.floor(col / 3) + (x % 3)
            ] === num
        ) {
            return false;
        }
    }
    return true;
}

function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board)) {
                            return true;
                        }
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

app.post("/solve", (req, res) => {
    const { board } = req.body;
    
    if (!board || board.length !== 9 || board.some((row) => row.length !== 9 || row.some((cell) => cell < 0 || cell > 9))) {
        return res
        .status(400)
        .json({ success: false, message: "Invalid board!" });
    }
    
    const solvedBoard = JSON.parse(JSON.stringify(board));
    if (solveSudoku(solvedBoard)) {
        res.json({ success: true, board: solvedBoard });
    } else {
        res.json({ success: false, message: "No solution exists!" });
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
