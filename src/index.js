import React from 'react';

import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById("root"));

function AppHeader() {

  return (
    <h1>My Todo list</h1>
  );
};

function SearchPanel() {

  return (
    <input placeholder='search' />
  );
}

function TodoLIst() {

  const items = ['Don\'t eat', 'Don\'t sleep'];

  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

function App() {

  return (
    <>
      <AppHeader />
      <SearchPanel />
      <TodoLIst />
    </>
  );
};

root.render(<App />);