import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import './TodoItem.css'
export default function TodoItem(props) {
    const [addButton, setAddButton] = useState();
    return (
        <Row className="todoitem-row" onMouseOver={() => setAddButton(true)} onMouseOut={() => setAddButton(false)}>
            <Form.Check className={props.todo.completed ? "todoItem-checkbox checked" : "todoItem-checkbox col-10 "}
                type="checkbox"
                checked={props.todo.completed}
                onChange={() => props.handleChangeProps(props.todo.id)}
                label={props.todo.title}>
            </Form.Check>
            <button value={addButton} className={addButton? "delete-todoItem-btn visible" : "delete-todoItem-btn hidden"} 
            onClick={() => {
                props.deleteTodoProps(props.todo.id)
                if(!props.todo.completed)alert("Give attention! you going to delete uncompleted todo. are you sure?")}}>x</button>

        </Row>
    )
}