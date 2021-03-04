import React from 'react';
import '../../../styles/modal.css';

function EpsCharacters(props) {

    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={() => props.toggle()}> &times;</span>
                <p><b>{props.data.title}</b></p>
                {props.data.characters.map(char => <div>{char}</div>)}
            </div>
        </div>
    )
}

export default EpsCharacters