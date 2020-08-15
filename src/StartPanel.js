import React from 'react';
import { Link } from 'react-router-dom';
import * as Rosary from './Rosary';
import Lang from './assets/lang.json';
import './App.css';

class StartPanel extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            languageName: props.langId,
            language: Lang[props.langId],
            rosary: Rosary.build(Lang[props.langId])
        }
    }

    render() {
        return (
            <div>
                <h1 style={{margin: '2pt' }}>
                    {this.state.language.title}
                </h1>
                <div className='App-row'>
                    {this.state.rosary.getMysteries().map(m => 
                        <Link to={{pathname: `/pray/${m.getName()}/${Rosary.Part.Opening}/0`}}>
                            <button className='Button' type='button' style={{width: '120pt'}}>
                                {m.getName()}
                            </button>
                        </Link>
                    )}
                </div>
                <p style={{margin: '2pt'}}>{this.state.language.today + ' ' + this.state.rosary.today().getName()}</p>
            </div>
        );
    }
}

export default StartPanel;