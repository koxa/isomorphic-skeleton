import React from 'react';
import Layout from "./layout/layout";
import Document from "./document/document";
import express from "express";
import ReactDOMServer from 'react-dom/server';

var fs = require('fs');
const pagesDir = __dirname + "/pages";
const routes = express.Router();


/** DEFINE PAGES ROUTES **/
const files = fs.readdirSync(pagesDir); // read all files from 'pages' folder
for (let file of files) { // require each file and define corresponding route for it
    let name = file.split('.')[0]; // get rid of extension
    name = name === 'index' ? '' : name; // index is home page '/'
    const Page = require(`${pagesDir}/${file}`).default;
    Page && routes.get(`/${name}`, async (req, res) => {
        const props = await getInitialProps(Page); /* Extend them props with any data you need here */
        res.send(ReactDOMServer.renderToString((
            <Document>
                <Layout {...props}> {/* If you need custom layout for Page just handle it individually in a loop */}
                    <Page {...props}/>
                </Layout>
            </Document>
        )));
    });
}

/**
 * Fetches initial props from page in case method defined on React Page
 * Will resolve Promise if method is async
 * @param Page
 * @returns {Promise<void>}
 */
async function getInitialProps(Page) {
    let props = {};
    if (Page.getInitialProps) {
        if (Page.getInitialProps instanceof Promise) {
            props = await Page.getInitialProps()
        } else {
            props = Page.getInitialProps();
        }
    }
    return props;
}

export default routes;

