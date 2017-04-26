import React from 'react';
import Square from './square.js';

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
            xIsnext: true
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        // squares[i] = this.state.xIsnext ? 'X' : 'O';
        if(this.checkForWinner(squares) || squares[i]) {
            return;
        }
        this.setState({
            squares: squares,
            xIsnext: !this.state.xIsnext
        });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
    }

    checkForWinner(squares) {
        const winStates = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for (var i = 0; i < winStates.length; i++) {
            const [a,b,c] = winStates[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        // const status = 'Next player: ' + (this.state.xIsnext ? 'X' : 'O');
        const winner = this.checkForWinner(this.state.squares);
        let status;
        if (winner) {
            status = "CONGRATULATIONS PLAYER " + winner + ". YOU'VE WON!"
            this.setState = {
                squares: Array(9).fill(null),
                xIsnext: true
            };
        } else {
            status = 'Next player: ' + (this.state.xIsnext ? 'X' : 'O');
        }

        return (
            <div>
                <div className='status'>{status}</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}


module.exports = Board;