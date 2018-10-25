import React,{Component} from 'react';

class TaskEdit extends Component{

    componentDidMount
    
    render(){
        console.log(this.props)
        return(
            <div>
                Task Details ID OF TASK IS {this.props.match.params.id}
            </div>
        )
    }
}

export default TaskEdit;