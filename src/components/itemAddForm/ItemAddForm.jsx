import "./ItemAddForm.css"

export default function ItemAddForm({onItemAdded}) {
  return(   
    <div className="item-add-form">
      <button type="button" className="btn btn-outline-secondary" onClick={() => onItemAdded("Hello world!")}>Add todo</button>
    </div>  
  );
}