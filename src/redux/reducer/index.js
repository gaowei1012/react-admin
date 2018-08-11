import { type } from './../action'

/**
 * initialState
 */
const initialState = {
    menuName: '首页'
}

/**
 * state = initialState /  
 * action 
 */
export default ( state = initialState, action ) => {
    switch (action) {
        case type.SWITCH_MENU:
            return {
                ...state,
                menuName: action.menuName
            }
            break;
        default:
            break;        
    }
}