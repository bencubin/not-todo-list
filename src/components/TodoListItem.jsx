import './TodoListItem.css'

export default function TodoListItem({label, important = false}) {
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>

      <button type="button" className="btn btn-outline-success btn-sm">
        <li className="fa fa-exclamation"></li>
      </button>

      <button type="button" className="btn btn-outline-success btn-sm">
        <li className="fa fa-trash-o"></li>
      </button>
    </span>
  );
};