import React from 'react';
import ReactDOM from 'react-dom';
import AboutPage from "./pages/about";
import IndexPage from "./pages";
const serverData = window.SERVER_DATA;

let Page = null;
switch(window.location.pathname) {
    case '/':
        Page = IndexPage;
        break;
    case '/about':
        Page = AboutPage;
        break;

}

ReactDOM.hydrate(<Page {...serverData}/>, document.getElementById('page-mount'));