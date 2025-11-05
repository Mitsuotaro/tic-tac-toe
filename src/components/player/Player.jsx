import { useState } from "react";

export default function Player({ name, symbol }){
    const [ isEditing, setIsEditing ] = useState(false);

    let playerName = <span className="player-name">{ name }</span>;

    let buttonText = "Edit";

    function onClickEdit(){
        setIsEditing(() => !isEditing);
    }

    if(isEditing){
        playerName = (
            <input type="text" required value={name}/>
        );

        buttonText = "Save";
    }
    return (
        <>
            <li>
                <span className="player">
                    { playerName }
                    <span className="player-symbol">{ symbol }</span>
                </span>
                <button onClick={onClickEdit}>{ buttonText }</button>
            </li>
        </>
    );
}