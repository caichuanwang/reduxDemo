/*
 * @Descripttion: 文件的处理都要注释的，不然会很多的
 * @version: 1.0
 * @Author: ekko
 * @Date: 2020-11-09 20:08:36
 * @LastEditors: ekko
 * @LastEditTime: 2020-11-10 20:20:26
 */
import axios from 'axios'
import  {CHANGE_INPUT,ADD_LIST,DEL_LIST,GET_LISTDATA} from './actionsType'
export const changeInputActions = (value)=> ({
    type:CHANGE_INPUT,
    value
})
export const addListActions = ()=> ({
    type:ADD_LIST
})
export const delListActions = (value)=> ({
    type:DEL_LIST,
    value
})

export const getListDataAction = (value)=> ({
    type:GET_LISTDATA,
    value
})
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5faa6bffc2c980774c4b21d2/example/geiList').then((res) => {
            const data = res.data;
            console.log(data,'789');
            dispatch(getListDataAction(data.data.listData))
         })
    }
}