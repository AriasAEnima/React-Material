import React, {Component} from 'react';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import TodoApp from './components/TodoApp';
import logo from './logo.svg';


const LoginView = () => (
      <Login/>
  );

const TodoAppView = () => (
      <TodoApp/>
);

localStorage.setItem('username','eduardo');
localStorage.setItem('password','clave');

class App extends Component {


    constructor(props) {
        super(props);
        this.state={isLoggedIn:false};
    }


    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <br/>
                    <br/>
                    <div>
                        {!localStorage.getItem('isLoggedIn')?
                          <Route path="/" component={LoginView}/> : <Route path="/" component={TodoAppView}/>  }
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;
