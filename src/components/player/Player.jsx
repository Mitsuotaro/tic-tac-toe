import { useState } from "react";

export default function Player({ initialName, symbol }){
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    let editablePlayerName = <span className="player-name">{ playerName }</span>;

    let buttonText = "Edit";

    function onClickEdit(){
        setIsEditing((prev) => !prev);
    }

    function handleChangeName(type, event){
        setPlayerName(event.target.value);
    }

    if(isEditing){
        editablePlayerName = (
            <input 
                type="text" 
                required 
                value={playerName} 
                onChange={() => handleChangeName('test', event)}
            />
        );

        buttonText = "Save";
    }

    return (
        <>
            <li>
                <span className="player">
                    { editablePlayerName }
                    <span className="player-symbol">{ symbol }</span>
                </span>
                <button onClick={onClickEdit}>{ buttonText }</button>
            </li>
        </>
    );
}