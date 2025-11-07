import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onClickTile, activeSymbol }){
    const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

    function handleOnClickTile(rowIndex, colIndex){
        const updateGameBoard = (prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerBoard => [...innerBoard])];
            updatedBoard[rowIndex][colIndex] = activeSymbol;
            return updatedBoard;
        }

        setGameBoard((prevBoard) => updateGameBoard(prevBoard));

        onClickTile();
    }

    function renderTiles(){
        return gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {
                    row.map((playerSymbol, colIndex) => {
                            return (
                                <li key={colIndex}>
                                    <button onClick={() => handleOnClickTile(rowIndex, colIndex)}>{playerSymbol}</button>
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