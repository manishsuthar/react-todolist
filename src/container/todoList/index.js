import React,{Component} from 'react';
import ListView from '../../component/listView';

class TODO extends Component{

    state={
        listData:[{'id':1,'task':'TODO SOMETHING1','priority':'HIGH'},{'id':2,'task':'TODO SOMETHING2','priority':'MID'},
                  {'id':3,'task':'TODO SOMETHING3','priority':'LOW'},{'id':4,'task':'TODO SOMETHING4','priority':'MID'},
                  {'id':5,'task':'TODO SOMETHING5','priority':'HIGH'}
                ],
    }

    render(){
        return(
            <div>
                <ListView data={this.state.listData} />
            </div>
        )
    }
}

export default TODO;