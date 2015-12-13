'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import StreamList from './components/streams/StreamList.jsx';

import "./styles/main.scss";

window.React = React;


ReactDOM.render(
    <StreamList />,
    document.getElementById('content')
); 