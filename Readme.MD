# Tic-Tac-Toe

A simple, responsive Tic-Tac-Toe game built with vanilla HTML, CSS, and JavaScript — no frameworks, no libraries.

## Features

- Classic 2-player Tic-Tac-Toe (X vs O)
- Win detection **and** draw detection
- Animated line drawn across the winning row, column, or diagonal
- Live scoreboard (X wins, O wins, draws) that persists across rounds
- Turn indicator showing whose move it is
- Dark mode / light mode toggle
- Keyboard-accessible and mobile responsive

## Files

```
├── index.html   → page structure
├── style.css    → styling, theme colors, animations
├── app.js       → game logic
```

## How to run it

1. Download all three files (`index.html`, `style.css`, `app.js`) into the **same folder**.
2. Open `index.html` in your browser — double-click it, or:
   - In VS Code, install the **Live Server** extension, then right-click `index.html` → **Open with Live Server**.

That's it — no installation, no build step.

## How to play

- Click any empty box to place your mark. Players alternate between X and O.
- Get three of your marks in a row (horizontally, vertically, or diagonally) to win.
- Click **Reset Round** to clear the board and start a new round without losing the score.
- Click the sun/moon icon (top-right) to switch between light and dark mode.

## What this project demonstrates

- DOM manipulation (selecting elements, updating text/classes dynamically)
- Event handling (`click` listeners)
- Game-state logic (turns, win conditions, draw conditions)
- CSS custom properties (variables) for theming
- CSS keyframe animations
- Responsive, accessible design basics

## Ideas to extend it

- Add a "vs Computer" mode with a simple AI opponent
- Save scores in `localStorage` so they survive a page refresh
- Add sound effects for moves and wins
- Add a match history log

## License

Free to use and modify for learning or portfolio purposes.