import Player from './components/player/Player.jsx';

function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player name="player one" symbol="x"/>
                    <Player name="player two" symbol="o"/>
                </ol>
            </div>
        </main>
    );
}

export default App
