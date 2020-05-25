import React from 'react';
import ReactDOM from 'react-dom';
import {getInitialProps} from "./utils";

const Pages = {};
const PagesToRequire = require.context('./pages/', true, /\.js$/).keys();
for (let Page of PagesToRequire) {
    Page = Page.substr(2);
    Pages[Page] = require('./pages/' + Page);
}

/** DEFINE REQUIRED FUNCTIONS **/

const hydratePage = (Page, data) => {
    ReactDOM.hydrate(<Page {...data}/>, document.getElementById('page-mount'));
};
const getPage = (pathname) => {
    let Page;
    switch (pathname) {
        case '/':
            Page = Pages['index.js'].default;
            break;
        default:
            pathname = pathname.substr(1);
            Page = Pages[pathname + '.js'].default;
    }
    return Page;
};
const onLinkClick = async (e) => {
    e.preventDefault();
    const link = e.currentTarget;
    const pathname = link.pathname;
    const Page = getPage(pathname);
    if (Page) {
        history.pushState({}, '', pathname);
        const data = await getInitialProps(Page);
        hydratePage(Page, data);
        setupLinks();
    }
};
const setupLinks = () => {
    const links = document.getElementsByTagName('a');
    for (let link of links) {
        link.addEventListener('click', onLinkClick);
    }
};

const initPage = () => {
    const Page = getPage(window.location.pathname);
    hydratePage(Page, window.SERVER_DATA || {});
    setupLinks();
};

window.onpopstate = function (event) {
    console.log(`location: ${document.location}, state: ${JSON.stringify(event.state)}`);
    initPage();
};

/** INITIALIZE PAGE **/
initPage();
