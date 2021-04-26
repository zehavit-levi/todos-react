import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import './TodoItem.css'
export default function TodoItem(props) {
    const [addButton, setAddButton] = useState(false);
    return (
        <Row onMouseOver={()=>setAddButton(true)} onMouseOut={()=>setAddButton(false)}>
            <Form.Check className={props.todo.completed?"todoItem-checkbox col-11 checked": "todoItem-checkbox col-10 "}
                type="checkbox"
                checked={props.todo.completed}
                onChange={() => props.handleChangeProps(props.todo.id)} 
                label={props.todo.title}>
            </Form.Check>
            {addButton ?
                <button className="delete-todoItem-btn col-1" onClick={() => props.deleteTodoProps(props.todo.id)}>x</button> : ""
            }
        </Row>
    )
}