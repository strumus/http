'use strict';


import React from 'react';
import './stream-list.css';

class StreamPreviewBox extends React.Component {
	render() {
		return (
			<div className="streamPreview">
				<h2>Stream Name</h2>
			</div>
		);
	}
}

class StreamList extends React.Component {
	render() {
		return (
			<div className="streamList">
				<StreamPreviewBox />
				<StreamPreviewBox />
				<StreamPreviewBox />
				<StreamPreviewBox />
				<StreamPreviewBox />
				<StreamPreviewBox />
				<StreamPreviewBox />
				<StreamPreviewBox />
			</div>
		);
	}
}

export default StreamList;