import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Todo from './Components/Todo';
import Mui from './Components/Mui';
import MyTodos from './Components/my todos.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {


    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: '/todo/a/b', search: '?name=netflix&age=56585' }}>todo</Link>
                        </li>
                        <li>
                            <Link to="/mui">mui</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route path="/aa" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/todo/:id/:name" component={Todo}/>
                    <Route path="/mui" render={()=>{
                    return                1>0?<Home/>:<Mui/>
                    }}/>
                </Router>
            </div>
        );
    }
}

export default App;
