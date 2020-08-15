import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Lang from './assets/lang.json';

class AboutPanel extends React.Component {
    constructor(props) {
        super(props);
        
        let lang = Lang[props.langId];

        this.state = {
            about: lang.about,
            by: lang.by,
            iconsBy: lang.iconsBy,
            from: lang.from,
            back: lang.back
        }
    }

    render() {
        return (
            <>
                <h1>
                    {this.state.about}
                </h1>
                <div className='App-credits'>
                    <p>
                        {this.state.by}
                    </p>
                    <p>
                        {this.state.iconsBy}
                        <a href="https://icon54.com/" title="Pixel perfect">
                            Pixel perfect
                        </a>
                        {this.state.from}
                        <a href="https://www.flaticon.com/" title="Flaticon"> 
                            www.flaticon.com
                        </a>
                    </p>
                </div>
                <Link to='/'>
                    <button className='Button' type='button'>
                        {this.state.back}
                    </button>
                </Link>
            </>
        );
    }
}

export default AboutPanel;