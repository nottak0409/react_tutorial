import { combineReducer } from "redux";
import { CLICK_SQUARE, JUMP_TO_PAST } from "./actions";

const initialState = {
    history: [
        squares: Array(9).fill(null)
    ],
    stepNumber: 0,
    xIsNext: true,
    row: [],
    col: [],
};

function game(state = initialState, action) {
    switch(action.type) {
        case CLICK_SQUARE:
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const new_col = this.state.col.slice(0, this.state.stepNumber);
        const new_row = this.state.row.slice(0, this.state.stepNumber);
        if(calculateWinner(squares) || squares[i]) {
            return state;
        }
        squares[action.index] = this.state.xIsNext ? 'X' : 'O';
        return {
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            col: new_col.concat(Math.floor(i / 3) + 1),
            row: new_row.concat(i % 3 + 1 ),
        };

        case JUMP_TO_PAST:
            return state;
        default:
            return state;
    }
}

export const app = combineReducer({ game });

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
