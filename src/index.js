import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.js';
import './index.css';

class Game extends React.Component {
    render() {
        return(
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
                <div className='game-info'>
                    <div></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('app')
);