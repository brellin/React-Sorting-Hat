import React from 'react';
import './header.scss';

const Header = props => {
    return (
        <header
            style={{ display: props.clicked === true ? 'flex' : 'none' }}
        >
            <h1>The Hogwarts Hat</h1>
            <div
                className='hat'
                onClick={props.initialize}
                style={{ display: props.hat === true ? 'none' : 'flex' }}
            >
                Sort Me!
                </div>
        </header>
    )
}

export default Header;