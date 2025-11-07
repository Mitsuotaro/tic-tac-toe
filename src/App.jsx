import { useState } from 'react';
import Player from './components/player/Player.jsx';
import GameBoard from './components/game-board/GameBoard.jsx';

function App() {
    const [ activePlayer, setActivePlayer ] = useState('X');

    function handleOnClickTile(){
        setActivePlayer((prev) => prev === 'X' ? 'O' : 'X');
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player initialName="player one" symbol="x"/>
                    <Player initialName="player two" symbol="o"/>
                </ol>
                <GameBoard handleOnClickTile={handleOnClickTile} symbol={activePlayer}/>
            </div>
        </main>
    );
}

export default App
