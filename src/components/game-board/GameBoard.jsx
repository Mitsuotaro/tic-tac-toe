import { INITIAL_GAME_BOARD } from '../../constants/gameConstants.js';

export default function GameBoard({ onClickTile, turns }){
    
    // const [ gameBoard, setGameBoard ] = useState(INITIAL_GAME_BOARD);

    // function handleOnClickTile(rowIndex, colIndex){
    //     const updateGameBoard = (prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerBoard => [...innerBoard])];
    //         updatedBoard[rowIndex][colIndex] = activeSymbol;
    //         return updatedBoard;
    //     }

    //     setGameBoard((prevBoard) => updateGameBoard(prevBoard));

    //     onClickTile();
    // }

    function renderTiles(){
        return gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {
                    row.map((playerSymbol, colIndex) => {
                            return (
                                <li key={colIndex}>
                                    <button onClick={() => onClickTile(rowIndex, colIndex)}>{playerSymbol}</button>
                                </li>
                            );
                        })
                    }
                </ol>
            </li>);
    }

    return (
        <>
        <ol id="game-board">
            { renderTiles() }
        </ol>
        </>
    );
}