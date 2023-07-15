import { navigator } from '@tarojs/runtime';
import { CHANGE_TAB } from '../constants/tab';
import Taro from '@tarojs/taro';

const initialState = {
    tab: 0
}

export default function tab(state = initialState, action) {
    switch (action.type) {

        case CHANGE_TAB:
            console.log('action', action)
            switch (action.tab.detail) {
                case 0:
                    Taro.navigateTo({
                        url: '/pages/index/index'
                    })
                    break
                case 1:
                    Taro.navigateTo({
                        url: '/pages/counter/index'
                    })
                    break
                case 2:
                    Taro.navigateTo({
                        url: '/pages/user/index'
                    })
                    break
                case 3:
                    Taro.navigateTo({
                        url: '/pages/friends/index'
                    })
                default:
                    break
            }
            return {
                ...state,
                tab: action.tab
            }
        default:
            return state
    }
}