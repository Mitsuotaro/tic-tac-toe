// React
import { useState } from 'react';

// Constants
import { SYMBOLS } from './constants/gameConstants.js';

// Components
import Player from './components/player/Player.jsx';
import GameBoard from './components/game-board/GameBoard.jsx';
import Log from './components/log/Log.jsx';

function App() {
    const [ gameTurns, setGameTurns ] = useState([]);
    const [ activePlayer, setActivePlayer ] = useState(SYMBOLS['X']);

    function handleOnClickTile(rowIndex, colIndex){
        setActivePlayer((prev) => prev === SYMBOLS['X'] ? SYMBOLS['O'] : SYMBOLS['X']);

        setGameTurns((prevTurns) => {
            let currentPlayer = SYMBOLS['X'];

            if(prevTurns.length > 0 && prevTurns[0].player === SYMBOLS['X']){
                currentPlayer = SYMBOLS['O'];
            }

            const updatedTurns = [
                {  square: { row: rowIndex, col: colIndex, player: currentPlayer } }, 
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
            
            />
        </main>
    );
}

export default App
