import React from 'react';
import {Switch,Route} from 'react-router-dom';
import TODO from '../../container/todoList';
import FINISHED from '../../container/finishedList';
import DONE from '../../container/doneList';
import TaskEdit from '../../container/taskEdit';
const Main = props =>(
   <Switch>
       <Route exact path="/" component={TODO}/>
       <Route path="/done" component={DONE}/>
       <Route path="/finished" component={FINISHED}/>
       <Route path="/task/:id" component={TaskEdit}/>
   </Switch>
)

export default Main;