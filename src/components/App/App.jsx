import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'
import './App.css'

export default function App() {
  const todoData = [
    {label: 'Dont eat', important: false, id: 1},
    {label: 'Dont sleep', important: true, id: 2},
    {label: 'Look good', important: false, id: 3},
  ];

  return (
    <div className="todo-app">
      <AppHeader todo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};