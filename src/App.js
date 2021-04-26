import './App.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import NewTodoInput from './components/NewTodoInput/NewTodoInput';

function App() {
  const [todos, setTodos] = useState([]);
  const [opensTodos, setOpensTodos] = useState(0);
  const [filter, setFilter] = useState("All");

  const addTodoItem = title => {
    setTodos(todos.concat({ "title": title, "id": todos.length, "completed": false }));
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

  const Header = () => {
    return (
      <>
        <h1>Todos</h1>
      </>
    )
  }


  return (
    <Container>
      <Header />
      <NewTodoInput addTodoProps={addTodoItem} />
      {
        todos.length > 0 ?
          <div>
            <TodoList
              todos={todos}
              setTodos={setTodos}
              handleChangeProps={handleChange}
              deleteTodoProps={deleteTodo} />
            <div>{opensTodos} items left</div>
          </div> : ""

      }

    </Container>
  );
}

export default App;
