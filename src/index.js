import React
    from 'react';

import ReactDOM
    from 'react-dom';

import Frame
    from 'frame';

import {BrowserRouter}
    from 'react-router-dom';

const Anchor=document.querySelector('.anchor');
const App=(
    <BrowserRouter>
        <Frame/>
    </BrowserRouter>
);

ReactDOM.render(App,Anchor);