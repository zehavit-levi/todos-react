import './App.css';
import { Alert, Button, Container, ModalBody, ModalDialog, ModalFooter, ModalTitle, Row } from 'react-bootstrap';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import NewTodoInput from './components/NewTodoInput/NewTodoInput';
import { Modal } from 'bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

function App() {
  const [todos, setTodos] = useState([]);
  const [opensTodos, setOpensTodos] = useState(0);
  const [filter, setFilter] = useState("All");
  const [showAlert, setShowAlert] = useState(false);

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
      if (todo.id === id && !todo.completed) {
        setOpensTodos(opensTodos - 1);
      }
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
              todos={filter === "All" ? todos
                : filter === "Completed" ? todos.filter(todo => todo.completed)
                  : todos.filter(todo => !todo.completed)
              }
              setTodos={setTodos}
              handleChangeProps={handleChange}
              deleteTodoProps={deleteTodo} />
            <Row className="bottom-row">
              <div className="open-todos">{opensTodos} items left</div>
              <div className="button-container">
                <button className={filter === "All" ? "button-filter marked" : "button-filter"} onClick={() => setFilter("All")}>All</button>
                <button className={filter === "Active" ? "button-filter marked" : "button-filter"} onClick={() => setFilter("Active")}>Active</button>
                <button className={filter === "Completed" ? "button-filter marked" : "button-filter"} onClick={() => setFilter("Completed")}>Completed</button>
              </div>
            </Row>
          </div> : ""
      }
    </Container>
  );
}

export default App;
