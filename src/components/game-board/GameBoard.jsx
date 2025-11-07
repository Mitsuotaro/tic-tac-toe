import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ handleOnClickTile, symbol }){
    const [ gameBoard, setGameBoard ] = useState(initialGameBoard);


    

    function onClickTile(rowIndex, colIndex){
        handleOnClickTile();

        const updateGameBoard = (prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerBoard => [...innerBoard])];
            updatedBoard[rowIndex][colIndex] = symbol;
            return updatedBoard;
        }

        setGameBoard((prevBoard) => updateGameBoard(prevBoard));
    }

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