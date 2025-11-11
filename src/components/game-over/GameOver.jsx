export default function GameOver({ winner, handleOnRematch }){

    function test(){
        console.log("test")
    }

    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <h2>{winner} won!</h2>
            <p><button onClick={() => test()}>Rematch!</button></p>
        </div>
    );
}