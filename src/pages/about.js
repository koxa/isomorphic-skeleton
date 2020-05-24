import React from 'react';
import Menu from "../components/menu/menu";

const AboutPage = (props) => {
    return (
        <div className={'page about-page'}>
            <Menu/>
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ex mauris. Praesent luctus vulputate
                ultricies. Vestibulum faucibus nec odio at vehicula. Donec vel lorem vehicula, mattis risus nec,
                suscipit metus. Nulla facilisi. Nulla facilisi. Morbi tincidunt tristique nisi. Praesent eu mauris
                velit.
            </p>
            <p>Aenean magna purus, ultricies vel velit id, euismod venenatis velit. Donec volutpat velit massa, at
                scelerisque tellus dapibus non. Suspendisse luctus gravida est vel ultricies. In non nibh felis.
                Maecenas sit amet cursus dolor. Donec imperdiet eget leo non porta. Maecenas porta suscipit ultrices.
                Aliquam eu bibendum sapien, sed consequat massa. Sed a justo vitae diam congue venenatis. Sed sed
                condimentum ligula.
            </p>
        </div>
    )
};

export default AboutPage;