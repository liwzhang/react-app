import React, { Component } from 'react';
import './App.css';
import RestList from './components/RestList/RestList';
import MainPage from './components/MainPage/MainPage';

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
                <RestList restlist={this.state.restrooms} />
            </div>
        );
        return (
            <div className="App">
                <MainPage />
                {restrooms}
            </div>
        );
    }
}

export default App;
