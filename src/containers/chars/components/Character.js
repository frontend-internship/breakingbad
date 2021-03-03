import React from 'react'

const redStyle = {
    backgroundColor: "rgb(211, 176, 176)",
    color: "crimson",
}

const greenStyle = {
    backgroundColor: "rgb(173, 218, 169)",
    color: "green",
}

const grayStyle = {
    backgroundColor: "rgb(112, 105, 105)",
    color: "#ffffff",
}

const statusStyle = (status) => {
    if(status.toLowerCase().includes("dead") || status.toLowerCase().includes("deceased")){
        return redStyle
    }
    else if(status.toLowerCase().includes("unknown")){
        return grayStyle
    }else{
        return greenStyle

    }
}

function Character(props) {
    return (
        <div className="char-card">
            <div className="status" style={statusStyle(props.data.status)}>
                {props.data.status}
                </div>
            <div className="avatar-container">
                <img src={props.data.img} alt={props.data.name} />
            </div>
            <div>{props.data.name}</div>
            <div>{props.data.nickname}</div>
        </div>
    )
}

export default Character
