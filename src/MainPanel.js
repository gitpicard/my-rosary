import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import StartPanel from './StartPanel';
import PrayerPanel from './PrayerPanel';
import AboutPanel from './AboutPanel';
import ErrorPanel from './ErrorPanel';
import './App.css';

class MainPanel extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Route render={({location}) => (
                        <TransitionGroup exit={false}>
                            <CSSTransition key={location.key} timeout={300} classNames='Fade' unmountOnExit>
                                <Switch location={location}>
                                    <Route key='/' path='/' exact component={() => <StartPanel langId={this.props.langId}/>}/>
                                    <Route key='/pray' path='/pray/:mystery/:stage/:index' component={(props) => 
                                        <PrayerPanel {...props} langId={this.props.langId}/>}
                                    />
                                    <Route key='/about' path='/about' component={() => <AboutPanel langId={this.props.langId}/>}/>
                                    {/* This will act as our 404 page since we will route to that automatically if
                                      * we don't get any other match. */}
                                    <Route component={ErrorPanel}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}/>
                </BrowserRouter>
            </>
        );
    }
}

export default MainPanel;