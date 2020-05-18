import React from 'react';

class Document extends React.Component {
    render() {
        return <html>
        <head>
            <title>Isomorphic skeleton</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel={'stylesheet'} href={'/client.css'}/>
            <base href={'/'}/>
        </head>
        <body>
        {this.props.children}
        {/*<script*/}
        {/*    dangerouslySetInnerHTML={{__html: 'var SERVER_DATA = ' + JSON.stringify(SERVER_DATA)}}/>*/}
        {/*<script src="/client.js" type='text/javascript'/>*/}
        </body>
        </html>
    }
}

export default Document;