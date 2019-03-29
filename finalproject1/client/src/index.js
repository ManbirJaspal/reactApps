import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import { Landing } from './components/landing/landing';


const App = () => (
    <Landing/>
)

ReactDOM.render(
        <Router>
            <App/>
        </Router>
    , document.getElementById('root'));
