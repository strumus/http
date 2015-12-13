import React from 'react';
import './stream.css';

class Stream extends React.Component {
    componentDidMount() {
        const id = this.props.params.id;
    }

    render() {
        return (
            <div className="stream">
                <h2>Stream Name {this.props.params.id}</h2>
            </div>
        );
    }
}

export default Stream;
