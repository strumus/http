import React from 'react';

import Home from './components/Home.jsx';
import TopNav from './components/navs/TopNav.jsx';
import StreamList from './components/streams/StreamList.jsx';

console.log(Home,StreamList);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            route: window.location.hash.substr(1)
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }

    render() {
        return (
            <div>
                <TopNav />
                {this.props.children}
            </div>
        )
    }
}

export default App;