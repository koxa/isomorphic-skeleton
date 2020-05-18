const IndexPage = (props) => {
    const {hui} = props;
    return (
        <div>
            <ul>
                <li><a href={'/about'}>About</a></li>
                <li><a href={'/test'}>Test</a></li>
            </ul>
            <h2>Hello World from Home Page!</h2>
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