/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: ekko
 * @Date: 2020-11-09 10:37:44
 * @LastEditors: ekko
 * @LastEditTime: 2020-11-10 20:23:10
 */

 /***
  * store必须是唯一的
  * 
  */
/***
 * 这里要做的是引入store
 * 订阅
 * 调度action
 */

import React, { Component } from 'react';
import './TodoList.css'
import store from '../store' //引入仓库
import {changeInputActions,addListActions,delListActions,getListDataAction,getTodoList} from '../store/action.js'
import TodoListUI from './TodoListUI'


 class TodoList extends Component {
     constructor(props) {
         super(props);
         this.state = store.getState()
         this.changeInputVlaue = this.changeInputVlaue.bind(this);
         this.storeChange = this.storeChange.bind(this)
         store.subscribe(this.storeChange) //订阅store的变化并激活storeChange函数
     }
     changeInputVlaue(e){
        const action = changeInputActions(e.target.value)
        store.dispatch(action)
     }
     storeChange(){
         this.setState(store.getState())
     }

     handleClick = ()=> {
         let action = addListActions()
        store.dispatch(action)
     }

     delItem = (index) => {
         let action = delListActions(index)
         store.dispatch(action)
     }

     componentDidMount(){
        const actios = getTodoList()
        store.dispatch(actios)
     }

     render() { 
         return ( <TodoListUI
            inputValue = {this.state.inputValue}
            listData = {this.state.listData}
            changeInputVlaue = {this.changeInputVlaue}
            handleClick = {this.handleClick}
            delItem =  {this.delItem}
            ></TodoListUI> );
     }
 }
  
 export default TodoList;