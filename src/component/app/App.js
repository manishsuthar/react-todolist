import 'bootstrap3/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { Component } from 'react';
import './App.css';
import Main from '../Main';
import {Link} from 'react-router-dom';
class App extends Component {
  state={
    isTab:''
  }
  isActive(){
    var urlname = window.location.pathname;
      switch(urlname){
        case '/':
            this.setState({isTab:'TODO'})
            break;
        case '/done':
            this.setState({isTab:'DONE'})
        break;
        case '/finished':
            this.setState({isTab:'FINISHED'})
        break;
        case '/add':
            this.setState({isTab:'ADD'})
        break;
        default:
      }
  }
  componentDidMount(){
    this.isActive();
  }
  // componentDidUpdate(){
  //   var pathname = window.location.pathname;
  //   this.isActive(pathname);
  // }
 
  render() {
    const {isTab} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>TODO LIST APP</p>
        </header>
        <div>
            <div className="container mainDivStyle">
               <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12 headerHeight">
                  <Link to={`/`}>
                    <div className={`col-md-3 col-sm-3 col-xs-3 col-lg-3 red ${isTab==="TODO"?"Active":""}`}>
                        <center><h4>TODO</h4></center>
                    </div>
                  </Link>
                  <Link to={`/done`}>
                    <div className={`col-md-3 col-sm-3 col-xs-3 col-lg-3 orange ${isTab==="DONE"?"Active":""}`}>
                          <center><h4>DONE</h4></center>
                    </div>
                  </Link>
                  <Link to={`/finished`}>
                    <div className={`col-md-3 col-sm-3 col-xs-3 col-lg-3 green ${isTab==="FINISHED"?"Active":""}`}>
                          <center><h4>FINISHED</h4></center> 
                    </div>
                 </Link>
                 <Link to={`/add`}>
                    <div className={`col-md-3 col-sm-3 col-xs-3 col-lg-3 blue ${isTab==="ADD"?"Active":""}`}>
                          <center><h4>ADD</h4></center> 
                    </div>
                 </Link>
                    
              </div>
              <div className="row rowMargin">
                  <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                      <Main/>
                  </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
