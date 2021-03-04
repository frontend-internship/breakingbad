import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GetAllChars } from '../../redux/actions/chars/Characters';
import Character from './components/Character';
import Loader from '../../components/Loader';

import '../../styles/characters.css';

const getChars = (searchKey, list, limit) => {
    let couter = limit + 1;
    if (searchKey === "") {
        return list.map(char => {
            couter--;
            if (couter > 0) {
                return <Character data={char} />
            } else {
                return ""
            }
        })


    } else {
        return list.map(char => {

            couter--;
            if (couter > 0) {
                if (char.name.toLowerCase().includes(searchKey.toLowerCase()) || char.nickname.toLowerCase().includes(searchKey.toLowerCase()) || char.status.toLowerCase().includes(searchKey.toLowerCase())) {
                    return <Character data={char} />

                } else {
                    return ""
                }
            } else {
                return ""
            }
        })
    }
}

function Characters(props) {

    const [searchkey, setSearchKey] = useState("");
    const [limit, setLimit] = useState(24);

    useEffect(() => {
        props.GetAllChars()
    }, [])

    const chars = props.Characters.characters;

    return (
        <div style={{ marginBottom: '3rem' }}>
            <div className="search-container"><input type="text" placeholder="search for name, nickname or status..." onChange={(e) => setSearchKey(e.target.value)} /> </div>
            <div className="cards-container">
                {props.Characters.fetching ? <Loader /> : getChars(searchkey, chars, limit)}
            </div>
            {
                chars.length > limit ?
                    (
                        props.Characters.fetching ?
                            ""
                            :
                            <div className="load-more" onClick={() => setLimit(limit + 12)}>Load more</div>
                    )
                    :
                    "No More Characters"
            }
        </div>
    )
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {

    GetAllChars,
})(Characters);