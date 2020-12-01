import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <ul>
                <Link to='/'>Take Me Home</Link>
            </ul>
        </div>
    )
}

export default NavBar
