const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard(){
    function onClickTile(rowIndex, colIndex){
        console.log("rowIndex: ", rowIndex)
        console.log("colIndex: ", colIndex)
    }

    return (
        <>
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => {
                        return <li onClick={() => onClickTile(rowIndex, colIndex)} key={colIndex}>col </li>
                    })}
                </ol>
            </li>)}
        </ol>
        </>
    );
}