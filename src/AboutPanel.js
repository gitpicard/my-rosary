import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class AboutPanel extends React.Component {
    constructor() {
        super();

        this.state = {
            about: '',
            by: '',
            iconsBy: '',
            back: ''
        }
    }

    componentDidMount() {
        this.setState({
            about: this.props.location.state.language.about,
            by: this.props.location.state.language.by,
            iconsBy: this.props.location.state.language.iconsBy,
            from: this.props.location.state.language.from,
            back: this.props.location.state.language.back
        });
    }

    render() {
        return (
            <div className='App-panel'>
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
                        {this.state.from} &#32
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
            </div>
        );
    }
}

export default AboutPanel;