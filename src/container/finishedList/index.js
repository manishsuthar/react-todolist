import React,{Component} from 'react';
import ListView from '../../component/listView';
import { request } from '../../component/function/function';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../component/loader';
class FINISHED extends Component{
    state={
        listData:[{'id':1,'task':'Null','priority':'HIGH'}],
        loaded:false
    }
    componentWillMount(){
        var reqData = {
            url:"http://localhost:8080/TodoListApp/List",
            requestType:'get',
            payload:{"listType":"FINISHED"}
        }
        request(reqData,(err,res)=>{
          if(!res.success){
            toast.error(res.msg, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
          }else{
            this.setState({listData:JSON.parse(res.data)})
            this.setState({loaded:true})
            toast.success(res.msg, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
          }  
        })
    }
    render(){
        const {loaded} = this.state;
        return(
            <div>
                {
                    !loaded && <Loader/>
                }
                {
                    loaded && <React.Fragment><ListView data={this.state.listData} /><ToastContainer autoClose={2000} /></React.Fragment>
                }
                
            </div>
        )
    }
}

export default FINISHED;