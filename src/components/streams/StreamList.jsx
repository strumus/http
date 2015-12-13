'use strict';


import React from 'react';
import StreamStore from '../../stores/StreamStore';
import './stream-list.css';

var ReactPropTypes = React.PropTypes;

import StreamServerActionCreators from '../../actions/StreamServerActionCreators';

StreamServerActionCreators.receiveAll([
    {
        title: "derp"
    },
    {
        title: "herp"
    }
]);
console.log(StreamServerActionCreators);

class StreamPreviewBox extends React.Component {
    construct() {
        this.propTypes = {
            message: ReactPropTypes.object
        }
    }

    render() {
        var stream = this.props.stream;
        console.log(stream);
        return (
            <div className="card card-block text-xs-center">
                <h4 className="card-title">{stream.title}</h4>

                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        );
    }
}

function getStreamListState() {
    return {
        allStreams: StreamStore.getAll()
    };
}

class StreamList extends React.Component {
    construct() {
        this.state = getStreamListState();
        console.log(this.state);
    }

    componentDidMount() {
        StreamStore.addChangeListener(this._onChange)
    }

    render() {
        var allStreams = this.props.allStreams;
        var streams = [];

        for (var key in allStreams) {
            streams.push(<StreamPreviewBox key={key} stream={allStreams[key]}/>);
        }

        return (
            <div className="card-deck">
                {streams}
            </div>
        );
    }

    _onChange() {
        this.setState(getStreamListState());
    }
}

export default StreamList;