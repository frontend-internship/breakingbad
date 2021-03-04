import * as actionTypes from '../../ActionTypes';
import { BaseUrl } from '../../../components/constants';

export function GetAllChars() {
    const url = BaseUrl + "characters";
    return {
        type: actionTypes.GET_ALL_CHARACTERS,
        payload: fetch(url).then((res) => res.json()).then(json => json)
    }
}