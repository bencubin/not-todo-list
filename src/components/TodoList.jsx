import TodoListItem from './TodoListItem';

export default function TodoList({todos}) {
  const elements = todos.map((item) => {
    return(
      <li>
        <TodoListItem {...item}/>
      </li>
    );
  });

  return (
    <ul>{elements}</ul>
  );
};