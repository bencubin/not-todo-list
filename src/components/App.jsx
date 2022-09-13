import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList';
import ItemStatusFilter from './ItemStatusFilter'

export default function App() {
  const todoData = [
    {label: 'Dont eat', important: false, id: 1},
    {label: 'Dont sleep', important: true, id: 2},
    {label: 'Look good', important: false, id: 3},
  ];

  return (
    <>
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={todoData} />
    </>
  );
};