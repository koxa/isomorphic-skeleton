import React from 'react';

const Menu = (props) => {
    return (
        <ul className={'menu'}>
            <li><a href={'/'}>Index</a></li>
            <li><a href={'/about'}>About</a></li>
            <li><a href={'/contact-form'}>Contact Form</a></li>
        </ul>
    );
};

export default Menu;