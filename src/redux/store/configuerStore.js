import { createStore } from 'redux'
import reducer from '../reducer'
// 开发调试
import { composeWithDevTools } from 'redux-devtools-extension'

export default () => createStore(reducer);