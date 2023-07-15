import {CHANGE_TAB} from '../constants/tab';

const initialState = {
    tab: 0
}

export default function tab(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                ...state,
                tab: action.tab
            }
        default:
            return state
    }
}