import { useState } from 'react';
import { SYMBOLS } from './constants/smybols.js';
import Player from './components/player/Player.jsx';
import GameBoard from './components/game-board/GameBoard.jsx';


function App() {
    const [ activePlayer, setActivePlayer ] = useState(SYMBOLS['X']);

    function handleOnClickTile(){
        setActivePlayer((prev) => prev === SYMBOLS['X'] ? SYMBOLS['O'] : SYMBOLS['X']);
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
                    activeSymbol={activePlayer}
                />
            </div>
        </main>
    );
}

export default App
