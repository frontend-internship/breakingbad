import * as actionTypes from '../../ActionTypes';
import { BaseUrl } from '../../../components/constants';

export function GetAllEpisodes() {
    const url = BaseUrl + "episodes";
    return {
        type: actionTypes.GET_ALL_EPISODES,
        payload: fetch(url).then((res) => res.json()).then(json => json)
    }
}