import { useState } from 'react';
import './TodoListItem.css';

export default function TodoListItem({label}) {
  const [done, setDone] = useState(false);
  const [important, setImportant] = useState();
  let classNames = 'todo-list-item';

  function onLabelClick() {
    setDone(() => {
      return !done;
    });
  }

  function onMarkImportant() {
    setImportant(() => {
      return !important;
    });
  }

  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onLabelClick}>
        {label}
      </span>

      <div>
        <button type="button" className="btn btn-outline-success btn-sm" onClick={onMarkImportant}>
          <i className="bi bi-exclamation"></i>
        </button>

        <button type="button" className="btn btn-outline-danger btn-sm">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </span>
  );
}