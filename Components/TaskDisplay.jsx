import { useState } from "react"
import TodoTaskAdder from "./TodoTaskAdder"
import TodoList from "./TodoList"

export default function TaskDisplay({ todos, updatedTodo, deleteTodo, searchTerm,searchDate }) {

  
  const dateSearch=todos.filter((todo)=>{
    todo.dueDate.includes(searchDate)
  });
  
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())  );
  return (<>
    <div className="d-flex fluid row">
      {filteredTodos.map((todo) => <TodoList key={todo.id}
        todo={todo}
        updateTodo={updatedTodo}
        deleteTodo={deleteTodo} />)}
    </div>
  </>)
}