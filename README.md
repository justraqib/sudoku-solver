# Sudoku Solver

A web-based Sudoku Solver that allows users to input a Sudoku puzzle, solve it using a backtracking algorithm, and display the solved Sudoku directly on the webpage.

## Features

- **Interactive Grid**: A 9x9 Sudoku grid with individual cells for user input.
- **Input Validation**: Only numbers between 1-9 can be entered in each cell.
- **Real-time Solve**: Solves the given Sudoku puzzle instantly using a backtracking algorithm.
- **Keyboard Navigation**:
  - Press **Enter** to move to the next cell.
  - Press **Backspace/Delete** to move to the previous cell.
- **Responsive Design**: Works on desktops and tablets.

## How It Works

1. Enter the Sudoku problem in the grid by filling in numbers in the cells.
2. Click the **Solve** button to solve the Sudoku puzzle.
3. The solution will be displayed directly on the grid.

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - JavaScript
- **Backend**:
  - Node.js with Express (for solving the Sudoku via API)

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/<your-username>/sudoku-solver.git
cd sudoku-solver
