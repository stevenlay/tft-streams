import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Streams from './Streams';

const App = () => {
    return (
        <div className="ui centered container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={Streams}/>
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;