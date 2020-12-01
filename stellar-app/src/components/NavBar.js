import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <ul>
                <Link to='/' className='link'>Take Me Home</Link>
            </ul>
        </div>
    )
}

export default NavBar
