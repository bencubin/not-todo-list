import React from 'react';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </>
  );
};

root.render(<App />);