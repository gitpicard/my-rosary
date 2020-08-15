import React from 'react';
import * as Rosary from './Rosary';
import Lang from './assets/lang.json';
import './App.css';

class PrayerPanel extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            landId: props.langId,
            language: Lang[props.langId],
            mystery: '',
            title: '',
            text: [],
            amen: '',
            rosary: null,
            stage: 0,
            index: 0,
            length: 0
        }
    }

    async componentDidMount() {
        // Check if we got routing parameters.
        if (this.props.match.params) {
            let rosary = Rosary.build(this.state.language);

            let stage = parseInt(this.props.match.params.stage);
            let index = parseInt(this.props.match.params.index);
            let decades = rosary.getMystery(this.props.match.params.mystery).getDecades();
            let title = (stage === Rosary.Part.Opening || stage === Rosary.Part.Ending) ? '' : decades[stage];

            this.setState({
                rosary: rosary,
                mystery: this.props.match.params.mystery,
                title: title,
                text: rosary.getPrayers(stage)[index],
                amen: this.state.language.amen,
                stage: stage,
                index: index,
                length: rosary.getPrayers(stage).length
            });
        }
    }

    move(offset) {
        let index = this.state.index + offset;
        let stage = this.state.stage;

        // Check if we hit the end of the opening/decade/ending.
        if (index >= this.state.length) {
            index = 0;
            stage++;
        }
        // Check if we need to move back to a previous part.
        else if (index < 0) {
            stage--;
            if (stage >= 0)
                index = this.state.rosary.getPrayers(stage).length - 1;
            // We hit the start of the Rosary again so go back to the home page.
            else {
                this.props.history.push('/');
                return;
            }
        }
        // Check if we hit the end of the Rosary.
        if (stage > Rosary.Part.Ending)
            this.props.history.push('/');
        // Otherwise we can go to the next prayer.
        else
            this.props.history.replace(`/pray/${this.state.mystery}/${stage}/${index}`);
    }

    back() {
        this.move(-1);
    }

    next() {
        this.move(1);
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.title}
                </h1>
                <div className='App-beads-line'>
                    {[...Array(this.state.length)].map((e, i) => {
                        if (i <= this.state.index)
                            return <img className='App-beads' src={process.env.PUBLIC_URL + '/bead-closed.png'}/>;
                        else
                            return <img className='App-beads' src={process.env.PUBLIC_URL + '/bead-open.png'}/>;
                    })}
                </div>
                <div className='App-prayer'>
                    {this.state.text.map(ln =>
                        <li className='App-prayer-line'>{ln}</li>  
                    )}
                    <li className='App-prayer-line'>{this.state.amen}</li>
                </div>
                <div className='App-row'>
                    <button className='Button' type='button' onClick={() => this.back()}>
                        <img src={process.env.PUBLIC_URL + '/back.png'} width='32pt' height='32pt' alt='Back'/>
                    </button>
                    <button className='Button' type='button' onClick={() => this.next()}>
                        <img src={process.env.PUBLIC_URL + '/next.png'} width='32pt' height='32pt' alt='Next'/>
                    </button>
                </div>
            </div>
        );
    }
}

export default PrayerPanel;