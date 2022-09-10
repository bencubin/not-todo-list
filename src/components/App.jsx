import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList';

export default function App() {
  const todoData = [
    {label: 'Dont eat', important: false},
    {label: 'Dont sleep', important: true},
    {label: 'Look good', important: false},
  ];

  return (
    <>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </>
  );
};