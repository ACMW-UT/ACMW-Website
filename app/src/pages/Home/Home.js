import React from 'react';

import Navbar from '../../Components/Navbar/Navbar';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <p>This is the home page</p>
                <p>Manish Typed this line</p>
                <p>Cole wrote hi</p>
                <p>Ikshita Typed this line</p>
                <p>Sanskar Typed this line</p>
                <img src="https://placekitten.com/300/300" />
                <p>This is for a commit.</p>
                <img src="https://placekitten.com/500/500" />
                <img src="https://placekitten.com/600/600" />
            </div>
        )
    }
}

export default Home;
