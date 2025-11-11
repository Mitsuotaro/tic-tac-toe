import { useState } from "react";

export default function Player({ initialName, symbol, isActive }){
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    let editablePlayerName = <span className="player-name">{ playerName }</span>;

    let buttonText = "Edit";

    function onClickEdit(){
        setIsEditing((prev) => !prev);
    }

    function handleChangeName(event){
        setPlayerName(event.target.value);
    }

    if(isEditing){
        editablePlayerName = (
            <input 
                type="text" 
                required 
                value={playerName} 
                onChange={() => handleChangeName(event)}
            />
        );

        buttonText = "Save";
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                { editablePlayerName }
                <span className="player-symbol">{ symbol }</span>
            </span>
            <button onClick={onClickEdit}>{ buttonText }</button>
        </li>
    );
}