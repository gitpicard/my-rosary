import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StartPanel from './StartPanel';
import PrayerPanel from './PrayerPanel';
import AboutPanel from './AboutPanel';
import ErrorPanel from './ErrorPanel';
import './App.css';

class MainPanel extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter forceRefresh={true}>
                    <Switch>
                        <Route path='/' exact component={StartPanel}/>
                        <Route path='/pray/:mystery/:langId/:stage/:index' component={PrayerPanel}/>
                        <Route path='/about' component={AboutPanel}/>
                        {/* This will act as our 404 page since we will route to that automatically if
                          * we don't get any other match. */}
                        <Route component={ErrorPanel}/>
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

export default MainPanel;