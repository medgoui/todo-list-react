import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Modal, Button } from 'react-bootstrap';

const List = props => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [value2, setValue2] = useState(props.todo);
    const remove=(id)=>{
        props.setTodo(props.todos.filter((el,i)=>i!==id))
    }
    const edit=(id,value)=>{
        props.setTodo(props.todos.map((el,i)=>(i===id)?{subject:value}:el) )
        handleClose();
    }
    const style = {
        maxWidth: "18rem",
        width: "50%",
        margin: "auto",
        marginTop: 50
    }    
    return(
    <div className="card text-white bg-secondary mb-3" style={style} >
        <div className="card-header" style={{textAlign:"center"}}>{props.number}</div>
        <div className="card-body">
            <p className="card-text">{props.todo}</p>
            <div>
            <i style={{marginRight:20, cursor:"pointer"}} onClick={()=>remove(props.id)}className="fa fa-trash"></i>
            <i style={{marginRight:20, cursor:"pointer"}} className="fa fa-edit" variant="primary" onClick={handleShow} ></i>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.number}</Modal.Title>
            </Modal.Header>
            <Modal.Body><input type="text" value={value2} size="50" placeholder={props.todo} onChange={(event) => {setValue2(event.target.value)}}/></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>edit(props.id,value2)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
    );
}

export default List;