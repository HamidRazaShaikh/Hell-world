import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Child1 from './child1.js'
import Child2 from './child2.js'


class Home extends Component {


    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <li>
                            <Link to="/home/">Child1</Link>
                        </li>
                        <li>
                            <Link to="/home/Child2">Child2</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/home/" component={Child1}/>
                    <Route exact path="/home/child2" component={Child2}/>
                </Router>
            </div>
        );
    }
}
export default Home;
