import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout from './components/pages/layout';
import Page1 from './components/pages/page1';
import Page2 from './components/pages/page2';
import Page3 from './components/pages/page3';

ReactDOM.render(<Router history={hashHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Page1}></IndexRoute>
            <Route path='Page2(/:article)' name="Page2" component={Page2}></Route>
            <Route path='Page3' name="Page3" component={Page3}></Route>
        </Route>
    </Router>
    ,document.getElementById('root')
);