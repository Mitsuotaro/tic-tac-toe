import Player from './components/player/Player.jsx';
import GameBoard from './components/game-board/GameBoard.jsx';

function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player initialName="player one" symbol="x"/>
                    <Player initialName="player two" symbol="o"/>
                </ol>
                <GameBoard />
            </div>
        </main>
    );
}

export default App
