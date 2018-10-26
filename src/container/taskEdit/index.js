import React,{Component} from 'react';
import { request } from '../../component/function/function';
import { ToastContainer, toast } from 'react-toastify';
import './index.css';
import Loader from '../../component/loader';
import config from '../../config';
class BTNComp extends Component{
    // constructor(props){
    //     super(props)
        
    // }
    mystate = {
        class:this.props.class,
        name:this.props.name,
        id:this.props.taskid
    }
    render(){
        return(
        <div className="row paddingClass">
            <a href="#/" onClick={this.props.ChangeStatus.bind(this,this.mystate.name)}>
                <div className={`col-md-12 col-lg-12 col-xs-12 col-sm-12 ${this.mystate.class} customBorder`}>
                    <h3>{this.mystate.name}</h3>
                </div>
                </a>
            </div>
        );
    }
}

// const TODO = () =>{
//     return(
//         <div>
//             <BTNComp class="orange" name="DONE" ChangeStatus={this.statusChange}/>
//             <BTNComp class="green" name="FINISHED" ChangeStatus={this.statusChange}/>
//         </div>
//     );
// }
// const DONE = () =>{
//     return(
//         <div>
//             <BTNComp class="orange" name="DONE" ChangeStatus={this.statusChange}/>
//             <BTNComp class="green" name="FINISHED" ChangeStatus={this.statusChange}/>
//         </div>
//     );
// }
// const FINISHED = () =>{
//     return(
//         <div>
//             <BTNComp class="orange" name="DONE" ChangeStatus={this.statusChange}/>
//             <BTNComp class="green" name="FINISHED" ChangeStatus={this.statusChange}/>
//         </div>
//     );
// }

class TaskEdit extends Component{
    constructor(props) {
        super(props);
            this.state={
                loaded:false,
                status:'',
                task:'',
                date:'',
                id:''   
            }
        };
    state={
        loaded:false,
        status:'',
        task:'',
        date:'',
        id:''
    }
    RequestData(id){
        var reqObject = {
            url:config.baseurl+'TodoListApp/getTask',
            requestType:'get',
            payload:{id:id}
        }
        request(reqObject,(err,res)=>{
            if(!res.success){
                toast.error(res.msg, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }else if(err){
                toast.error("Something is Wrong!!!", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }else{
                var data = JSON.parse(res.data);
                data = data[0];
                this.setState({status:data.status});
                this.setState({task:data.task});
                this.setState({date:data.date});
                this.setState({id:data.id});
                this.setState({loaded:true});
                // this.setState({date:data.date});
                toast.success(res.msg, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }
        })
    }

    componentDidMount(){
        this.RequestData(this.props.match.params.id);
    }
    statusChange(key,event){
        var RequestData={
            url:"http://localhost:8080/TodoListApp/taskUpdate",
            requestType:"get",
            payload:{id:this.props.taskid,status:key}
        }
        request(RequestData,(err,res)=>{
            if(!res.success){
                toast.error(res.msg, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
           }else{
                toast.success(res.msg, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                setTimeout(() => {
                    window.location = "../";
                }, 2000);
           }
        })
    }

    // updateText(event){
    //     console.log(this.state)
    // }

    render(){
        const {loaded,status,task,date,id} = this.state;
        return(
            <div>
                <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12 p-3">
                    <div className="form-group">
                        <textarea className="form-control textarea" rows="5" name="task" value={task}></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className={`col-md-12 col-lg-12 col-xs-12 col-sm-12 alert ${status==='TODO'?'alert-danger':status==='DONE'?'alert-warning':status==='FINISHED'?'alert-success':''}`}>
                        Current Statue <strong>{status}</strong><br/>
                        Date :<strong>{date}</strong><br/>
                        Task ID:<strong>{id}</strong>
                    </div>
                </div>
                
                
                {/* <div className="row paddingClass">
                    <a href="#" onClick={this.statusChange.bind(this,"TODO")}>
                        <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12 red customBorder">
                            <h3>TODO</h3>
                        </div>
                    </a>
                </div>
                <div className="row paddingClass">
                    <a href="#" onClick={this.statusChange.bind(this,"DONE")}>
                        <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12 orange customBorder">
                            <h3>DONE</h3>
                        </div>
                    </a>
                </div>
                <div className="row paddingClass">
                    <a href="#" onClick={this.statusChange.bind(this,"FINISHED")}>
                        <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12 green customBorder">
                            <h3>FINISHED</h3>
                        </div>
                    </a>
                </div> */}
                {
                    !loaded && <Loader/>
                }
                {   
                    loaded && status ==='TODO' && <React.Fragment><BTNComp class="orange" name="DONE" taskid={id} ChangeStatus={this.statusChange}/><BTNComp class="green" name="FINISHED" taskid={id} ChangeStatus={this.statusChange}/></React.Fragment>
                }
                {
                    loaded && status ==='DONE' && <React.Fragment><BTNComp class="red" name="TODO" taskid={id} ChangeStatus={this.statusChange}/><BTNComp class="green" name="FINISHED" taskid={id} ChangeStatus={this.statusChange}/></React.Fragment>
                }
                {
                    loaded && status ==='FINISHED' && <React.Fragment><BTNComp class="red" name="TODO" taskid={id} ChangeStatus={this.statusChange}/><BTNComp class="orange" name="DONE" taskid={id} ChangeStatus={this.statusChange}/></React.Fragment>
                }
                {/* <BTNComp class="red" name="TODO" ChangeStatus={this.statusChange}/>
                <BTNComp class="orange" name="DONE" ChangeStatus={this.statusChange}/>
                <BTNComp class="green" name="FINISHED" ChangeStatus={this.statusChange}/> */}
                
                <ToastContainer autoClose={2000} />
            </div>
        )
    }
}

export default TaskEdit;