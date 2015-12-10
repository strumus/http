'use strict';


import React from 'react';
import './stream-list.css';

class StreamPreviewBox extends React.Component {
	render() {
		return (
			<div className="card card-block text-xs-center">
				<h4 className="card-title">Special title treatment</h4>
				<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		);
	}
}

class StreamList extends React.Component {
	render() {
		return (
			<div className="card-deck">
				<StreamPreviewBox />
				<StreamPreviewBox />
				<StreamPreviewBox />
				<StreamPreviewBox />
			</div>
		);
	}
}

export default StreamList;