import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GetAllEpisodes } from '../../redux/actions/eps/Episodes';
import Episode from './components/Episode';
import Loader from '../../components/Loader';

import '../../styles/episodes.css';

const getEpisodes = (searchKey, list, limit) => {
    let couter = limit + 1;
    if (searchKey === "") {
        return list.map(episode => {
            couter--;
            if (couter > 0) {
                return <Episode data={episode} />
            } else {
                return ""
            }
        })


    } else {
        return list.map(episode => {

            couter--;
            if (couter > 0) {
                if (episode.title.toLowerCase().includes(searchKey.toLowerCase()) || episode.characters.join().toLowerCase().includes(searchKey.toLowerCase())) {
                    return <Episode data={episode} />

                } else {
                    return ""
                }
            } else {
                return ""
            }
        })
    }

}


function Episodes(props) {

    const [searchkey, setSearchKey] = useState("");
    const [limit, setLimit] = useState(16);

    useEffect(() => {
        props.GetAllEpisodes()
    }, [])

    const episodes = props.Episodes.episodes;

    return (
        <div style={{ marginBottom: '3rem' }}>
            <div className="search-container"><input type="text" placeholder="search for title, season or even characters..." onChange={(e) => setSearchKey(e.target.value)} /> </div>
            <div className="cards-container">
                {props.Episodes.fetching ? <Loader /> : getEpisodes(searchkey, episodes, limit)}
            </div>
            {
                !props.Episodes.fetching ?
                    (episodes.length > limit ?
                        (
                            props.Episodes.fetching ?
                                ""
                                :
                                <div className="load-more" onClick={() => setLimit(limit + 12)}>Load more</div>
                        )
                        :
                        "No More Episodes")
                    :
                    "Loading..."
            }
        </div>
    )
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {

    GetAllEpisodes,
})(Episodes)

