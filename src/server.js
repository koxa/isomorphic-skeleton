import React from 'react';
import Layout from "./layout/layout";
import Document from "./document/document";
import express from "express";
import ReactDOMServer from 'react-dom/server';
import {getInitialProps} from "./utils";

var fs = require('fs');
const pagesDir = __dirname + "/pages";
const server = express.Router();


/** DEFINE PAGES ROUTES **/
const files = fs.readdirSync(pagesDir); // read all files from 'pages' folder
for (let file of files) { // require each file and define corresponding route for it
    let name = file.split('.')[0]; // get rid of extension
    name = name === 'index' ? '' : name; // index is home page '/'
    const Page = require(`${pagesDir}/${file}`).default;
    Page && server.get(`/${name}`, async (req, res) => {
        const props = await getInitialProps(Page); /* Extend them props with any data you need here */
        // res.send(ReactDOMServer.renderToNodeStream((
        //     <Document serverData={props}>{/* MAKE SURE THERE IS NO EMPTY SPACES TO AVOID REACT WARNING*/}
        //         <Layout {...props}><Page {...props}/></Layout>{/* If you need custom layout for Page just handle it individually in a loop */}
        //     </Document>
        // )));
        res.write("<!DOCTYPE html><html><head><title>My Page</title></head><body>");
        res.write("<div id='content'>");
        const stream = ReactDOMServer.renderToNodeStream(<Layout {...props}><Page {...props}/></Layout>);
        stream.pipe(res, { end: false });
        stream.on('end', () => {
            res.write("</div></body></html>");
            res.end();
        });
    });
}



export default server;

