import { useState } from "react"
import { Container } from "react-bootstrap";

export default function TodoList({ todo, updateTodo, deleteTodo }) {

  const st = {
    width: '18rem',
    display: 'flex'
  }
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDueDate,setNewDueDate]=useState(todo.dueDate)
  const [newImportant, setNewImportant] = useState(todo.isImportant);
  const handleUpdate = () => {
    updateTodo(todo.id, newText, newImportant,newDueDate);
    setIsEditing(false);
  };
  console.log(todo.isImportant)
  console.log(todo.dueDate)

  return (<>
    {/* <li>
      <input
        type="checkbox"
        checked={todo.isImportant}
        onChange={() => updateTodo(todo.id, { ...todo, isImportant: !todo.isImportant })}
      />
      {isEditing ? (
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={() => setIsEditing(!isEditing)} >
        {isEditing ? 'Save' : 'Edit'}
        {handleUpdate}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li> */}
    <div className="col-sm-6 mb-3 mb-sm-0 m-1" style={st}>
      {isEditing ? (
        <ul className="list-group list-group-flush">
          <li className="list-group-item" >
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            /></li>
          {
            todo.isImportant ? (<li>
              <label >Important : </label><input
                className="text-primary"
                type="checkbox"
                checked={newImportant}
                onChange={(e) => setNewImportant(e.target.checked)}
                style={{ backgroundColor: 'red', color: 'red' }}

              /></li>) : (<li>
                <label >Important</label><input
                  type="checkbox"
                  checked={newImportant}
                  onChange={(e) => setNewImportant(e.target.checked)}
                  style={{ backgroundColor: 'green', color: 'red' }}
                />
              </li>
            )
            
          }
          <li><input 
            type='date'
            value={newDueDate}
            onChange={(e)=> setNewDueDate(e.target.value)}
          /></li>
          <button onClick={handleUpdate} className="btn btn-primary">Update</button>
        </ul>
      ) : (
        <div className="card col" >
          <ul className="list-group list-group-flush bg-secondary">

            <li className="list-group-item  bg-primary ">  {todo.text} </li>  {todo.isImportant === true ? <li className="list-group-item text-white bg-danger">Important</li> : <li className="list-group-item text-primary">Not Important </li>} <li className="list-group-item"> Due: {todo.dueDate}</li>
            <button onClick={() => setIsEditing(true)} className="btn btn-primary">Edit</button>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
          </ul>
        </div>)}
    </div>
  </>
  )
}
