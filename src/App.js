import React from 'react';
import './App.css';
import MainPanel from './MainPanel';

class App extends React.Component {
    render() {
        return (
            <>
                <div className='App'>
                    <header className='App-header'>
                        <div className='App-panel'>
                            <MainPanel/>
                        </div>
                    </header>
                </div>
            </>
        );
    }
}

export default App;
