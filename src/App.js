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

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;
