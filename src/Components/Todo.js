import React, { Component } from 'react';
import Header from './Header';


class Todo extends Component {





    state = {
        todos: [],
        text: 'Hello Name'
    };

    constructor(props) {
        super(props);
        console.log(this.props);
        let params = new URLSearchParams(this.props.location.search);
        console.log(params.get('name'));
        console.log(params.get('age'));
    }


    addTodo() {
        var todos = this.state.todos;
        todos.push(this.state.text);
        this.setState({todos: todos, text: ''});
    }

    removeTodo(i) {
        var todos = this.state.todos;
        todos.splice(i, 1);
        this.setState({todos: todos});
    }


    changeMyText(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" name='text' value={this.state.text} onChange={this.changeMyText.bind(this)}/>
                <input type="text" name='email' value={this.state.email} onChange={this.changeMyText.bind(this)}/>
                <button onClick={this.addTodo.bind(this)}>Click</button>
                <ul>
                    {this.state.todos.map((v, i)=> {
                        return (
                            <li key={i}>{v}
                                <button onClick={this.removeTodo.bind(this,i)}>Delete</button>
                            </li>)
                    })}
                </ul>

                <hr/>
            </div>
        );
    }
}
export default Todo;
