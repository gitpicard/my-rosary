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
        let langId = (navigator.language.split('-')[0] in Lang) ? navigator.language.split('-')[0] : 'en'
        let lang = Lang[langId];

        this.state = {
            langId: langId,
            language: lang
        }
    }

    setLang(l) {
        this.setState({
            langId: l,
            language: Lang[l]
        });
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
                            <a className='App-link' href='/'>{this.state.language.home}</a>
                            |
                            <a className='App-link' href='/about'>{this.state.language.about}</a>
                            |
                            <a className='App-link' href='#' onClick={() => this.setLang('en-US')}>English</a>
                            |
                            <a className='App-link' href='#' onClick={() => this.setLang('de')}>German</a>
                        </div>
                        <p className='App-link'>{this.state.language.cookies}</p>
                    </header>
                </div>
            </>
        );
    }
}

export default App;
