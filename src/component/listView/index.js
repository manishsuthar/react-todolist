import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
const ListItems = (taskData)=>{
    return(
        <div>
            <Link to={`/task/${taskData.task.id}`}>
                <div className="list-group-item list-group-item-action">
                    <span><p className="listTask">{taskData.task.task}</p></span>
                    <span className={`badge badge-defindclass 
                            ${taskData.task.priority==="HIGH"?"badge-danger":
                            taskData.task.priority==="MID"?"badge-warning":
                            taskData.task.priority==="LOW"?"badge-success":""}`}>
                            {taskData.task.priority}
                    </span>
                </div>
            </Link>
            
        </div>
        
    )
}

const ListView = (props) =>{
    return(
        <div>
            <div className="list-group">
                {  props.data.map(data=>(
                    <ListItems task={data} key={data.id}/>
                ))}
            </div>
        </div>
    )
}

export default ListView;