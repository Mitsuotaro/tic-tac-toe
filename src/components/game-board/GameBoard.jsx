
export default function GameBoard({ onClickTile, board }){
    function renderTiles(){
        return board.map((row, rowIndex) => 
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