/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: ekko
 * @Date: 2020-11-09 14:43:44
 * @LastEditors: ekko
 * @LastEditTime: 2020-11-10 20:22:54
 */
/***
 * 有些时候必须有相关的中间件然后才可以使用第三方插件
 */
/***
 * store里就是一个仓库，负责存储，但是不负责修改和管理，所以必须引入reducer
 * 进行管理 
 */
import {createStore,applyMiddleware,compose} from 'redux'
// 这里必须引入applyMiddleware才可以使用中间件
import thunk from 'redux-thunk'
import reducer from './reducer' //传入管理员
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_CONPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_CONPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(
   reducer,enhancer
  )

export default store


/***
 * redux-thunk配置切兼容redux——Dev
 * 就用这种的配置，整体思路就是使用redux的增强函数compose，将两个中间件
 * 增强到一起作为一个参数传入
 * 
 * import {createStore,applyMiddleware,compose} from 'redux'
 * const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_CONPOSE__?
   window.__REDUX_DEVTOOLS_EXTENSION_CONPOSE__({}):compose

   const enhancer = composeEnhancers(applyMiddleware(thunk))
 */

