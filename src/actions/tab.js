import { CHANGE_TAB } from '../constants/tab'

export const change = (tab) => {
    return {
        type: CHANGE_TAB,
        tab
    }
}

export function changeTab(tab) {
    return dispatch => {
        dispatch(change(tab))
    }
}