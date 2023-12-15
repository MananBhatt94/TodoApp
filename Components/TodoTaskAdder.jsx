import { Container } from "react-bootstrap";
// import {Input} from "@nextui-org/react";
import { useState } from "react";

function TodoTaskAdder({ addTodo }) {

    const [text, setText] = useState('')
    const [dueDate, setdueDate] = useState(new Date())
    const [isImportant, setisImportant] = useState(false)

    const handletaskadd = () => {
        const id = Date.now()
        const task = {
            id,
            text,
            dueDate,
            isImportant
        }
        addTodo(task);
        setdueDate('')
        setisImportant(false)
        setText('')
    }

    return (<>
        <div className="row " >
            <div className="col">
                <input type="text"
                    value={text}
                    placeholder="Enter a new Todo"
                    className="input-group mb-3"
                    onChange={(e) => setText(e.target.value)}
                    required
                />
                <div class="checkbox-wrapper-15"> <input class="inp-cbx" id="cbx-15" type="checkbox" style={{ display: 'none' }}
                    checked={isImportant}
                    onChange={(e) => { setisImportant(e.target.checked) }}

                />
                    <label class="cbx" for="cbx-15"> <span> <svg width="12px" height="9px" viewbox="0 0 12 9"> <polyline points="1 5 4 8 11 1"></polyline> </svg> </span> <span>Important</span> </label> </div>
            </div>
            <div className="col">
                <input type="date"
                    value={dueDate}
                    className="input-group mb-3 "
                    onChange={(e) => setdueDate(e.target.value)}
                /></div>
        </div>
        <br />
        <button className="btn btn-primary" onClick={handletaskadd}>Add Task</button>

    </>
    )

}
export default TodoTaskAdder;

{/* <Input
key={color}
type="email"
color={color}
label="Email"
placeholder="Enter your email"
defaultValue="junior@nextui.org"
className="max-w-[220px]"
/> */}