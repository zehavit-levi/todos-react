import './App.css';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import NewTodoInput from './components/NewTodoInput/NewTodoInput';

function App() {
  const [todos, setTodos] = useState([]);
  const [opensTodos, setOpensTodos] = useState(0);
  const [filter, setFilter] = useState("All");

  const addTodoItem = title => {
    setTodos(todos.concat({ "title": title, "id": '_' + Math.random().toString(36).substr(2, 9), "completed": false }));
    setOpensTodos(opensTodos + 1);
  };

  const handleChange = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        if (todo.completed) setOpensTodos(opensTodos + 1);
        else (setOpensTodos(opensTodos - 1));
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }
    ))
  };

  const deleteTodo = id => {
    for (const todo of todos) {
      if (todo.id === id && !todo.completed) setOpensTodos(opensTodos - 1);
    }
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Container className="app-todos">
      <h1 className="header-todo">Todos</h1>
      <NewTodoInput addTodoProps={addTodoItem} />
      {
        todos.length > 0 ?
          <div>
            <TodoList
              todos={filter === "All" ?todos
               : filter === "Completed"? todos.filter(todo => todo.completed) 
               : todos.filter(todo => !todo.completed)
               }
              setTodos={setTodos}
              handleChangeProps={handleChange}
              deleteTodoProps={deleteTodo} />
            <Row>
              <div className="col-3">{opensTodos} items left</div>
              <div className="col-9">
                <button className="button-filter" onClick={()=>setFilter("All")}>All</button>
                <button className="button-filter" onClick={()=>setFilter("Active")}>Active</button>
                <button className="button-filter" onClick={()=>setFilter("Completed")}>Completed</button>
              </div>
            </Row>


          </div> : ""

      }

    </Container>
  );
}

export default App;
