// React
import { useState } from 'react';

// Constants
import { SYMBOLS } from './constants/gameConstants.js';

// Components
import Player from './components/player/Player.jsx';
import GameBoard from './components/game-board/GameBoard.jsx';
import Log from './components/log/Log.jsx';

function deriveActivePlayer(gameTurns){
    let currentPlayer = SYMBOLS['X'];

    if(gameTurns.length > 0 && gameTurns[0].player === SYMBOLS['X']){
        currentPlayer = SYMBOLS['O'];
    }
    
    return currentPlayer;
}

function App() {
    const [ gameTurns, setGameTurns ] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    function handleOnClickTile(rowIndex, colIndex){
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [
                {  square: { row: rowIndex, col: colIndex}, player: currentPlayer }, 
                ...prevTurns
            ];

            return updatedTurns;
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player 
                        initialName="player one" 
                        symbol={SYMBOLS['X']}
                        isActive={activePlayer === SYMBOLS['X']}
                    />

                    <Player 
                        initialName="player two" 
                        symbol={SYMBOLS['O']}
                        isActive={activePlayer === SYMBOLS['O']}
                    />

                </ol>
                <GameBoard 
                    onClickTile={handleOnClickTile}
                    turns={gameTurns}
                />
            </div>
            <Log
                turns={gameTurns}
            />
        </main>
    );
}

export default App
