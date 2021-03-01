import React from 'react'
import { ReactComponent as MovieFilter  } from '../../assets/icons/movie_filter.svg'
import '../../styles/header.css'

function Header() {
    return (
        <div className="header">
            <div></div>
            <div><h1>Breaking Bad</h1></div>
            <div className="logo-div"><MovieFilter /></div>

        </div>
    )
}

export default Header
