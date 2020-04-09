import React from 'react';
import Header from './components/Header/index.js';
import Searchbox from './components/Searchbox/index.js';

import './app.css';

const App = () => {
    return (
        <div>
            <Header />
            <div class="container">
                <Searchbox />
            </div>
        </div>
    )
}

export default App;