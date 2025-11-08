import { INITIAL_GAME_BOARD } from '../../constants/gameConstants.js';

export default function GameBoard({ onClickTile, turns }){
    let gameBoard = INITIAL_GAME_BOARD;

    for (const turn of turns){
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    function renderTiles(){
        return gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {
                        row.map((playerSymbol, colIndex) => {
                            return (
                                <li key={colIndex}>
                                    <button 
                                        onClick={() => onClickTile(rowIndex, colIndex)}
                                        disabled={playerSymbol !== null}
                                    >
                                        {playerSymbol}
                                    </button>
                                </li>
                            );
                        })
                    }
                </ol>
            </li>);
    }

    return (
        <ol id="game-board">
            { renderTiles() }
        </ol>
    );
}