/**
 * make reducer
 */
import { combineReducers } from 'redux'
import numberReducer from './number'

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    num: numberReducer,
    ...asyncReducers,
  })
}

// 异步加载组件的时候获取原始store，和新增的reducer将其存放到store.asyncReducers
// 通过创建函数从新创建store然后执行replaceReducer方法更新
export const injectReducer = (store, { key, reducer }) => {
  if (key && reducer) {
    store.asyncReducers[key] = reducer
  }
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
