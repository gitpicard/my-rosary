import React from 'react';
import { Link } from 'react-router-dom';
import * as Rosary from './Rosary';
import Lang from './assets/lang.json';
import './App.css';

class StartPanel extends React.Component {

    constructor() {
        super();

        // Decide what language to use based on what the browser
        // language is. First, we will need to see if we support
        // that language and if we don't we will revert to English.
        let langId = (navigator.language in Lang) ? navigator.language : 'en-US'
        let lang = Lang[langId];

        this.state = {
            languageName: langId,
            language: lang,
            rosary: Rosary.build(lang)
        }
    }

    render() {
        return (
            <div className='App-panel'>
                <h1 style={{margin: '2pt' }}>
                    {this.state.language.title}
                </h1>
                <div className='App-row'>
                    {this.state.rosary.getMysteries().map(m => 
                        <Link to={{pathname: `/pray/${m.getName()}/${this.state.languageName}/${Rosary.Part.Opening}/0`}}>
                            <button className='Button' type='button'>
                                {m.getName()}
                            </button>
                        </Link>
                    )}
                </div>
                <p style={{margin: '2pt'}}>{this.state.language.today + ' ' + this.state.rosary.today().getName()}</p>
                <Link className='App-credits' to={{pathname: '/about', state: {
                    language: this.state.language
                }}}>
                    {this.state.language.about}
                </Link>
            </div>
        );
    }
}

export default StartPanel;