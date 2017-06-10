import React from 'react';
import {
  BrowserRouter as Router, // HashRouter, BrowserRouter 중 하나 사용.
  Route,
  Switch
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Account from './Account';
import App from './App';
// import App from './routerPractice/App';

ReactDOM.render(
    <Account />,
    document.getElementById('account')
)
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/:filterName" component={App} />
        </Switch>
    </Router>,
    document.getElementById('root')
)
