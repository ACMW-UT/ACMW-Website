import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <p>Navbar</p>
                <Link to="/">Home</Link>
                <p></p>
                <Link to="/about">About</Link>
            </div>
        )
    }
}

export default Navbar;