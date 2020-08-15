import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import MainPanel from './MainPanel';
import Lang from './assets/lang.json';

class App extends React.Component {
    constructor() {
        super();

        // Decide what language to use based on what the browser
        // language is. First, we will need to see if we support
        // that language and if we don't we will revert to English.
        let langId = (navigator.language in Lang) ? navigator.language : 'en-US'
        let lang = Lang[langId];

        this.state = {
            langId: langId,
            language: lang
        }
    }

    render() {
        return (
            <>
                <div className='App'>
                    <header className='App-header'>
                        <div className='App-panel'>
                            <MainPanel langId={this.state.langId}/>
                        </div>
                        <div className='App-link-row'>
                            <a href='/about'>{this.state.language.about}</a>
                        </div>
                    </header>
                </div>
            </>
        );
    }
}

export default App;
