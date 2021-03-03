import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GetAllChars } from '../../redux/actions/chars/Characters';

function Characters(props) {
    useEffect(() => {
        props.GetAllChars()
    }, [])

    console.log('props: ', props.Characters.fetching);

    return (
        <div>
          { props.Characters.fetching ? ('Loading Characters...') : `${props.Characters.characters}` }
        </div>
    )
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {

    GetAllChars,
}) (Characters);