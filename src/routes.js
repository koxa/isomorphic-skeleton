import React from 'react';
import Layout from "./layout/layout";
import Document from "./document/document";
import express from "express";
import ReactDOMServer from 'react-dom/server';

var fs = require('fs');
const pagesDir = __dirname + "/pages";
const routes = express.Router();


/** DEFINE PAGES ROUTES **/
const files = fs.readdirSync(pagesDir);
for (let file of files) {
    const path = file.split('.')[0];
    const Page = require(`${pagesDir}/${path}`).default;
    Page && routes.get(`/${path}`, async (req, res) => {
        const props = await getInitialProps(Page);
        res.send(ReactDOMServer.renderToString((
            <Document>
                <Layout {...props}> {/* Extend them props with any data you need */}
                    <Page {...props}/> {/* Extend them props with any data you need */}
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

