import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

export default function TodoList({todos}) {
  const elements = todos.map((item) => {
    const {label, important, id} = item;

    return(
      <li key={id} className="list-group-item">
        <TodoListItem label={label}/>
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
}