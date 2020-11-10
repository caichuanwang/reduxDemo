/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: ekko
 * @Date: 2020-11-09 14:50:31
 * @LastEditors: ekko
 * @LastEditTime: 2020-11-10 20:26:09
 */
/**
 * reducer做的就是引用store里的值，然后进行复制。拷贝等操作，不可以修改state
 * 然后返回一个新的state对象 这样store中的state就会更新
 * 
 * 当你需要更新的时候，reducer里要求必须在组件中调用store的dispatch（调度）
 * 函数并传入你的调度行为action，这样在reducer中才可以得到值并根据
 * action的type来判断并处理
 * 
 * 终于知道很多文档上都说为什么reducer是一个纯函数，因为整个文件就导出了
 * 怎么处理action数据的方法，并没有其他的操作
 * 
 * 
 */
import  {CHANGE_INPUT,ADD_LIST,DEL_LIST,GET_LISTDATA} from './actionsType'
 let defaultState = {
    inputValue :'xiededongxi',
    listData:[
    ]
} //start默认的参数，可以设置一些初始值
export default (state = defaultState,actions) => {
    console.log(actions,'t')
    //reducers里只能接受state，不能改变state
    if (actions.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = actions.value;
        return newState
    } 
    if (actions.type === ADD_LIST) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.listData.push(newState.inputValue);
        newState.inputValue = '';
        return newState
    }
    if (actions.type === DEL_LIST) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.listData.splice(actions.value,1);
        return newState
    }
    if (actions.type === 'getListData') {
        let newState = JSON.parse(JSON.stringify(state));
        console.log(actions,'5623');
        newState.listData = actions.value;
        return newState
    }
    return state
}


