import {useState} from 'react';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../itemAddForm/ItemAddForm';
import './App.css';

export default function App() { 
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  function createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: getRandomInt(0, 1000000)
    }
  }

  const [todoData, setTodoData] = useState([
    createTodoItem('Dont eat'),
    createTodoItem('Dont sleep'),
    createTodoItem('Look good'),
    createTodoItem('Dont speak')
  ]);

  function deleteItem(id) {
    setTodoData(() => {
      const index = todoData.findIndex((element) => element.id === id);
      const newData = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];
      return newData;
    });
  }

  function addItem(text) {
    const newItem = createTodoItem(text);
    setTodoData(() => {
      const newData = [
        ...todoData, newItem
      ];
      return newData;
    });   
  }

  function onToggleImportant(id) {
    setTodoData(() => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, important: !oldItem.important};
      const newData = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];
      return newData;
    });
  }

  function onToggleDone(id) {
    setTodoData(() => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done};
      const newData = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];
      return newData;
    });
  }

  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className="todo-app">
      <AppHeader todo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList
        todos={todoData}
        onDeleted={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />
      <ItemAddForm onItemAdded={addItem} />
    </div>
  );
}