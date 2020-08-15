import React from 'react';
import './App.css';
import MainPanel from './MainPanel';

class App extends React.Component {
    render() {
        return (
            <>
                <div className='App'>
                    <header className='App-header'>
                        <MainPanel/>
                    </header>
                </div>
            </>
        );
    }
}

export default App;
