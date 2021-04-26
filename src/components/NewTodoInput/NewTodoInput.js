import { useState } from "react";
import { Form } from "react-bootstrap"

export default function NewTodoInput(props) {
    const [newTodo, setNewTodo] = useState("");
    const handleSubmit = (e, props) => {
        e.preventDefault();
        console.log(newTodo);
        props.addTodoProps(newTodo);
        setNewTodo("");
    }

    const handleChangeNewTodo = (e) => {
        e.preventDefault();
        setNewTodo(e.target.value);
    }
    return (
        <Form onSubmit={(e) => handleSubmit(e, props)}>
            <Form.Control type="text" placeholder="What's next?" value={newTodo} onChange={(e) => handleChangeNewTodo(e)} />
        </Form>
    )
}