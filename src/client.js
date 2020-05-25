import React from 'react';
import ReactDOM from 'react-dom';
// import AboutPage from "./pages/about";
// import IndexPage from "./pages";
import {getInitialProps} from "./utils";

const Pages = {};
const PagesToRequire = require.context('./pages/', true, /\.js$/).keys();
console.log('GOT PagesToRequire', PagesToRequire);
for(let Page of PagesToRequire) {
    Page = Page.substr(2);
    console.log('requireing', './pages/' + Page);
    Pages[Page] = require('./pages/' + Page);
}
console.log('got PAGEs', Pages);


/** DEFINE REQUIRED FUNCTIONS **/

const hydratePage = (Page, data) => {
    ReactDOM.hydrate(<Page {...data}/>, document.getElementById('page-mount'));
};
const getPage = (pathname) => {
    let Page;
    console.log('GET PAGE', pathname, 'FROM PAGES:', Pages);
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
    const data = await getInitialProps(Page);
    hydratePage(Page, data);
    setupLinks();
};
const setupLinks = () => {
    const links = document.getElementsByTagName('a');
    for (let link of links) {
        link.addEventListener('click', onLinkClick);
    }
};

/** HYDRATE PAGE ON INITIAL LOAD AND SETUP LINKS **/
const Page = getPage(window.location.pathname, Pages);
hydratePage(Page, window.SERVER_DATA || {});
setupLinks();
