export default function ItemStatusFilter({filter, onFilterChange}) {
  const elements = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];

  const buttons = elements.map(({ name, label }) => {
    const isActive = (filter === name);
    const classes = isActive ? 'btn-info' : 'btn-outline-secondary';

    return (
      <button type="button" 
              className={`btn ${classes}`}
              key={name} 
              onClick={() => onFilterChange(name)}>
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
}