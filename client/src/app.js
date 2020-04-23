import React from 'react';
import Header from './components/Header/index.js';
import Searchbox from './components/Searchbox/index.js';
import Professor from './components/Professor'

import './app.css';

const App = () => {
    return (
        <div>
            <Header />
            <div class="container">
                <Professor />
                <div class="center-item">
                    {/* <Searchbox /> */}
                    
                </div>
            </div>
        </div>
    )
}

export default App;