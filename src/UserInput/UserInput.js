import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserInput = (props) => {
    const style = {
        width: "50%",
        margin: "auto"
    }
    const [value, setValue] = useState("");
    return (
      <form>
        <div style = {style} className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Write Your Task" aria-label="Task's Name" aria-describedby="basic-addon2" onChange={(event) => {setValue(event.target.value)}}/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={()=>props.myfunction([...props.todo,{subject:value}])} value={value}>Add</button>
        </div>
      </div>
      </form>
    );
}

export default UserInput;