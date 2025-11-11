// React
import { useState } from 'react';

// Constants
import { 
    SYMBOLS, 
    WINNING_COMBINATIONS,
    INITIAL_GAME_BOARD
} from './constants/gameConstants.js';

// Components
import Player from './components/player/Player.jsx';
import GameBoard from './components/game-board/GameBoard.jsx';
import Log from './components/log/Log.jsx';
import GameOver from './components/game-over/GameOver.jsx';

function deriveActivePlayer(gameTurns){
    let currentPlayer = SYMBOLS['X'];

    if(gameTurns.length > 0 && gameTurns[0].player === SYMBOLS['X']){
        currentPlayer = SYMBOLS['O'];
    }
    
    return currentPlayer;
};

function App() {
    const [ gameTurns, setGameTurns ] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = [...INITIAL_GAME_BOARD.map((arr) => [...arr])];
    // let gameBoard = INITIAL_GAME_BOARD;
    console.log("gameBoard: ", gameBoard);
    console.log("INITIAL_GAME_BOARD: ", INITIAL_GAME_BOARD);

    for (const turn of gameTurns){
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    let winner;

    for (const combination of WINNING_COMBINATIONS){
        const firstTileSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondTileSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdTileSymbol = gameBoard[combination[2].row][combination[2].column];

        if(
            firstTileSymbol &&
            firstTileSymbol === secondTileSymbol &&
            firstTileSymbol === thirdTileSymbol 
        ){
           winner = firstTileSymbol;
        }
    }

    const isDraw = gameTurns.length === 9 && !winner;


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

    function handleRematch(){
        setGameTurns([]);
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

                { (winner || isDraw) && 
                    <GameOver winner={winner} onClickRematch={handleRematch}
                />}

                <GameBoard 
                    onClickTile={handleOnClickTile}
                    board={gameBoard}
                />

            </div>
            <Log
                turns={gameTurns}
            />
        </main>
    );
}

export default App
