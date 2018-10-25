import 'bootstrap3/dist/css/bootstrap.min.css';
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
            <div className="col-md-12 col-xs-12 col-sm-12 headerHeight">
                  <Link to={`/`}>
                    <div className={`col-md-4 col-sm-4 col-xs-4 red ${isTab==="TODO"?"Active":""}`}>
                        <center><h3>TODO</h3></center>
                    </div>
                  </Link>
                  <Link to={`/done`}>
                    <div className={`col-md-4 col-sm-4 col-xs-4 orange ${isTab==="DONE"?"Active":""}`}>
                          <center><h3>DONE</h3></center>
                    </div>
                  </Link>
                  <Link to={`/finished`}>
                    <div className={`col-md-4 col-sm-4 col-xs-4 green ${isTab==="FINISHED"?"Active":""}`}>
                          <center><h3>FINISHED</h3></center> 
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
