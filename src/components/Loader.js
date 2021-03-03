import React from 'react'
import loading from '../assets/images/loader1.gif'

function Loader() {
    return (
        <div className="loader-conteainer">
            <img src={loading} alt="Loading..." />
        </div>
    )
}

export default Loader
