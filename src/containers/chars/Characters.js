import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GetAllChars } from '../../redux/actions/chars/Characters';
import Character from './components/Character';
import Loader from '../../components/Loader';

import '../../styles/characters.css';

const getChars = (searchKey, list) => {
    if (searchKey === "") {
        return list.map(char => <Character data={char} />)
    } else {
        return list.map(char => {
            if (char.name.toLowerCase().includes(searchKey.toLowerCase())) {
                return <Character data={char} />

            } else {
                return ""
            }
        })
    }
}

function Characters(props) {

    const [searchkey, setSearchKey] = useState("");

    useEffect(() => {
        props.GetAllChars()
    }, [])

    const chars = props.Characters.characters;

    return (
        <div>
            <div className="search-container"><input type="text" placeholder="search for..." onChange={(e) => setSearchKey(e.target.value)} /> </div>
            <div className="cards-container">
                {props.Characters.fetching ? <Loader /> : getChars(searchkey, chars)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {

    GetAllChars,
})(Characters);