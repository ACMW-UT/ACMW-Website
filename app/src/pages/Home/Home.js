import React from 'react';

import Navbar from '../../Components/Navbar/Navbar';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <p>This is the home page</p>
            </div>
        )
    }
}

export default Home;