import React from 'react';
import { Link } from 'react-router';

class TopNav extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
                <div className="container">
                    <Link to="/" className="navbar-brand">Strumus</Link>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link to="/streams" className="nav-link">Streams</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default TopNav;