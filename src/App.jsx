import { Container } from 'react-bootstrap';
import Header from '../Components/Header'
import TaskDisplay from '../Components/TaskDisplay';
import TodoTaskAdder from '../Components/TodoTaskAdder'
import { useState } from 'react'
import SearchBar from '../Components/Search';


function App() {
  const [searchDate,setsearchDate]=useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [todos,settodos]= useState([]);
  console.log(todos)
  const addTodo =(todo)=>{
    if(todo.text!='')
    settodos([...todos,todo])
  }
  const updateTodo = (id, newText, newImportant,newDueDate) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, text: newText, isImportant: newImportant, dueDate:newDueDate}
        : todo
    );
    settodos(updatedTodos);
  };
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    settodos(updatedTodos);
  };

  

  return (
    <div className='container-lg'>
      <Header/>
      <Container className="container-fluid ">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchDate={searchDate} setsearchDate={setsearchDate}/>
      <TodoTaskAdder addTodo={addTodo} todos={todos} />
      </Container>    
      <Container className='container-lg'>
      <TaskDisplay todos={todos} updatedTodo={updateTodo} deleteTodo={deleteTodo}  searchTerm={searchTerm}/>
      </Container>
      <Container></Container>
    </div>
  )
  }
export default App
