import React from 'react';
import ReactDOM from 'react-dom';
import AboutPage from "./pages/about";
import IndexPage from "./pages";
import {getInitialProps} from "./utils";

try {
    /** DEFINE REQUIRED FUNCTIONS **/
    const hydratePage = (Page, data) => {
        ReactDOM.hydrate(<Page {...data}/>, document.getElementById('page-mount'));
    };

    const getPage = (pathname) => {
        let Page;
        switch (pathname) {
            case '/':
                Page = IndexPage;
                break;
            case '/about':
                Page = AboutPage;
                break;
            default:
                Page = IndexPage;
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

    /** HYDRATE PAGE ON INITIAL LOAD **/
    const Page = getPage(window.location.pathname);
    hydratePage(Page, window.SERVER_DATA || {});


    /** SETUP LINKS ON INITIAL LOAD **/
    setupLinks();

} catch(errt) {
    console.log(errt);
}