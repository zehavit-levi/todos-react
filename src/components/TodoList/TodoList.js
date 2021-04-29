import { ListGroup, ListGroupItem } from "react-bootstrap";
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css'

export default function TodoList(props) {


    return (
        <ListGroup className="transparet-element">
            {props.todos.map(todo =>
                <ListGroupItem  className="transparet-element" key={todo.id}>
                    <TodoItem className="transparet-element" todo={todo}
                        key={todo.id}
                        handleChangeProps={props.handleChangeProps}
                        deleteTodoProps={props.deleteTodoProps}
                        handleShow={props.handleShow}>
                    </TodoItem>
                </ListGroupItem>)}
        </ListGroup>
    )
}