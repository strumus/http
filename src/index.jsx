'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Stream from './components/streams/Stream.jsx';
import StreamList from './components/streams/StreamList.jsx';
import App from './App.jsx';

import "./styles/main.scss";

window.React = React;


ReactDOM.render((
    <div className="container">
        <Router>
            <Route path="/" component={App}>
                <Route path="streams" component={StreamList} />
                <Route path="stream/:id" component={Stream} />
            </Route>
        </Router>
    </div>
), document.querySelector('#content'));
