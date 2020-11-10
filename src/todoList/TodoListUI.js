/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: ekko
 * @Date: 2020-11-10 16:54:22
 * @LastEditors: ekko
 * @LastEditTime: 2020-11-10 18:10:53
 */

 /***
  * 无状态组件   --一种函数式的组件 是没有calss的，就是一个函数返回一个UI组件
  * 没有state, 接收Props，渲染DOM，而不关注其他逻辑
  * 就是没有state并且没有想关的业务逻辑功能，就是一个纯粹的UI组件
  * 这样组件的性能得到了很大的提升
  * .当一个组件中只有一个render函数的组件，就可以用一个无状态组件来定义这个组件，无状态组件就是一个函数。
    *    2.现在我们把TodoListUI来定义 成一个无状态组件代码如下
  */
import React from 'react';
import {Button, Input,List} from 'antd'
import 'antd/dist/antd.css' 

/**
 * 改造成无状态组件
 */
const TodoListUI = (props) => {
    return (  <div>
        <div className='test'>
            <Input placeholder={props.inputValue} style={{width:'200px',height:'40px'}} onChange={props.changeInputVlaue}></Input>
            <Input value={props.inputValue}></Input>
            <Button type="primary" onClick={props.handleClick}   style={{height:'40px',marginRight:'20px'}}>确定</Button>
        </div>
        <div style={{width:'600px'}}>
           <List
               bordered
               dataSource = {props.listData}
               renderItem = {(item,index) => (
               <List.Item
               onClick={props.delItem.bind(this,index)}>
                   <List.Item.Meta
                   title='item'
                   description="description">
                   </List.Item.Meta>
                   {item}
               </List.Item>
               )}>

           </List>
        </div>
    </div> );
}


// class TodoListUI extends Component {

//     render() { 
//         return (  <div>
//             <div className='test'>
//                 <Input placeholder={props.inputValue} style={{width:'200px',height:'40px'}} onChange={props.changeInputVlaue}></Input>
//                 <Input value={props.inputValue}></Input>
//                 <Button type="primary" onClick={props.handleClick}   style={{height:'40px',marginRight:'20px'}}>确定</Button>
//             </div>
//             <div style={{width:'600px'}}>
//                <List
//                    bordered
//                    dataSource = {props.listData}
//                    renderItem = {(item,index) => (
//                    <List.Item
//                    onClick={props.delItem.bind(this,index)}>
//                        <List.Item.Meta
//                        title='item'
//                        description="description">
//                        </List.Item.Meta>
//                        {item}
//                    </List.Item>
//                    )}>

//                </List>
//             </div>
//         </div> );
//     }
// }
 
export default TodoListUI;
