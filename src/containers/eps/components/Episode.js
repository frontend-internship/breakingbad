import React, { useState } from 'react'
import EpsCharacters from './EpsCharacters'

function Episode(props) {

    const [seen, setSeen] = useState(false)
    let counter = 0;
    return (
        <div className="eps-card">
            <div>
                <h3>Title</h3>
                {props.data.title}</div><hr />
            <div><h3>Season</h3>
                {props.data.season}</div><hr />
            <div><h3>Air date </h3>
                {props.data.air_date}</div><hr />
            <div><h3>Characters</h3>
                {props.data.characters.map(char => {
                    if (counter < 3) {
                        counter++;
                        return <div> {`${char}`} </div>;
                    } else {
                        return ""
                    }
                })}
                {seen ? <EpsCharacters toggle={() => setSeen(!seen)} data={props.data} /> : null}

                <br /> <sub onClick={() => setSeen(!seen)}>more characters</sub> </div>
        </div>
    )
}

export default Episode
