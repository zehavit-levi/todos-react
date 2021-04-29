import { useState } from "react";
import { Form,  Row } from "react-bootstrap";
import './TodoItem.css'
export default function TodoItem(props) {
    const [addButton, setAddButton] = useState();
    return (
        <Row className="todoitem-row" onMouseOver={() => setAddButton(true)} onMouseOut={() => setAddButton(false)}>
            <Form.Check className={props.todo.completed ? "todoItem-checkbox checked todoitem-row" : "todoItem-checkbox todoitem-row"}
                type="checkbox"
                checked={props.todo.completed}
                onChange={() => props.handleChangeProps(props.todo.id)}
                label={props.todo.title}>
            </Form.Check>
            <button value={addButton} className={addButton ? "delete-todoItem-btn visible" : "delete-todoItem-btn hidden"}
                onClick={() => {
                    if (!props.todo.completed) {
                       props.handleShow(props.todo.id);
                    }
                    else props.deleteTodoProps(props.todo.id)
                }}>x</button>

        </Row>
    )
}