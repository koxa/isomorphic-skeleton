import React from 'react';

const Document = (props) => {
    const {serverData} = props;
    return (
        <html>
        <head>
            <title>Isomorphic skeleton</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel={'stylesheet'} href={'/client.css'}/>
            <base href={'/'}/>
        </head>
        <body>
        {props.children}
        <script
            dangerouslySetInnerHTML={{__html: 'var SERVER_DATA = ' + JSON.stringify(serverData)}}/>
        {/*<script src="/client.js" type='text/javascript'/>*/}
        </body>
        </html>
    )
};

export default Document;