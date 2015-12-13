'use strict';


import React from 'react';
import { Link } from 'react-router';

import StreamStore from '../../stores/StreamStore';
import StreamServerActionCreators from '../../actions/StreamServerActionCreators';

import './stream-list.css';

var ReactPropTypes = React.PropTypes;

StreamServerActionCreators.receiveAll([
    {
        title: "making shit with clone1018"
    },
    {
        title: "games with seenia"
    },    {
        title: "making shit with clone1018"
    },
    {
        title: "games with seenia"
    },    {
        title: "making shit with clone1018"
    },
    {
        title: "games with seenia"
    },    {
        title: "making shit with clone1018"
    },
    {
        title: "games with seenia"
    },    {
        title: "making shit with clone1018"
    },
    {
        title: "games with seenia"
    },    {
        title: "making shit with clone1018"
    },
    {
        title: "games with seenia"
    },
    {
        title: "porking pigs with citricsquid"
    }
]);

class StreamPreviewBox extends React.Component {
    construct() {
        this.propTypes = {
            message: ReactPropTypes.object
        }
    }

    render() {
        var stream = this.props.stream;
        return (
            <div className="card card-inverse text-xs-center">
                <img className="card-img" src={`http://thecatapi.com/api/images/get?format=src&type=png&derp=${stream.id}`} />
                <div className="card-img-overlay">
                    <h4 className="card-title">{stream.title}</h4>

                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to={`/stream/${stream.id}`} className="btn btn-primary">Watch</Link>
                </div>
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
    constructor(props) {
        super(props);

        this.state = getStreamListState();
    }

    componentDidMount() {
        StreamStore.addChangeListener(this._onChange)
    }

    render() {
        var allStreams = this.state.allStreams;
        var streams = [];

        for (var key in allStreams) {
            streams.push(<StreamPreviewBox key={key} stream={allStreams[key]}/>);
        }

        return (
            <div className="card-columns">
                {streams}
            </div>
        );
    }

    _onChange() {
        this.setState(getStreamListState());
    }
}

export default StreamList;