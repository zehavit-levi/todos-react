import { useState } from "react";
import { Form, InputGroup, Row } from "react-bootstrap";
import './TodoItem.css'
export default function TodoItem(props) {
    const [addButton, setAddButton] = useState(true);
    return (
        <Row>
            <Form.Check className={props.todo.completed?"todoItem-checkbox col-10 checked": "todoItem-checkbox col-10 "}
                type="checkbox"
                checked={props.todo.completed}
                onChange={() => props.handleChangeProps(props.todo.id)} 
                label={props.todo.title}>
            
            </Form.Check>
            {addButton ?
                <button className="delete-todoItem-btn col-2" onClick={() => props.deleteTodoProps(props.todo.id)}>Delete</button> : ""
            }
        </Row>
    )
}