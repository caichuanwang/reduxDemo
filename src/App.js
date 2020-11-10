/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: ekko
 * @Date: 2020-11-09 10:32:51
 * @LastEditors: ekko
 * @LastEditTime: 2020-11-09 11:12:32
 */
import './App.css';
import TodoList from './todoList/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
