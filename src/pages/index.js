import React from 'react';
import Menu from "../components/menu/menu";

const IndexPage = (props) => {
    const {hui} = props;
    return (
        <div className={'page index-page'}>
            <Menu/>
            <h1>Hello World from Home Page!</h1>
            <p>Props: {hui}</p>
        </div>
    )
};

IndexPage.getInitialProps = () => {
    return {
        "hui": "pizda"
    }
};

export default IndexPage;