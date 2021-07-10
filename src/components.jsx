import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
        {props.value}
        </button>
    )
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
            value={this.props.squares[i]}
            onClick = {() => this.props.onClick(i)}
            />
        )
    }

    render() {
        return (
            <div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
            </div>
        );
    }
}

export class Game extends React.Component {
    render() {
        const history = this.props.history;
        const current = history[this.props.stepNumber];
        const winner = calculateWinner(current.squares);
        const col = this.props.col;
        const row = this.props.row;

        const moves = history.map((step,move) => {
            const desc = move ?
                "Go to move #" + move  + " 横:" + row[move - 1] + " 縦:" + col[move - 1]:
                "Go to game start" ;
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
        let status;
        if(history.length >= 10) {
            status = "引き分けです";
        } else if(winner) {
            status = 'Winner:' + winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? "X" : "O");
        }
        return (
            <div className="game">
            <div className="game-board">
            <Board
                squares = {current.squares}
                onClick = {i => this.props.handleClick(i)}
            />
            </div>
            <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
            </div>
            </div>
        );
    }
}

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
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
