import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YumWorld from './YumWorld';

class App extends Component {

    render() {
        return (
            <div>
                <YumWorld />
            </div>
        );
    }
}

ReactDOM.render(<App></App>, document.querySelector('#root'));