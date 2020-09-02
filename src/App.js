import React, { Component } from 'react';
import './App.css';
import Restroom from './Restroom/Restroom.js';

class App extends Component {
    state = {
        restrooms: [
            { id: '1', name: 'Valley Fair Nordstrom Level 2', rating: 5 },
            { id: '2', name: 'Valley Fair Nordstrom Level 3', rating: 5 },
            { id: '3', name: 'Valley Fair Floor 1', rating: 4 },
        ],
    };
    render() {
        let restrooms = (
            <div>
                {this.state.restrooms.map((restroom) => {
                    return (
                        <Restroom
                            name={restroom.name}
                            rating={restroom.rating}
                            key={restroom.id}
                        ></Restroom>
                    );
                })}
            </div>
        );
        return (
            <div className="App">
                <h1>Restroom Rating</h1>
                {restrooms}
            </div>
        );
    }
}

export default App;
