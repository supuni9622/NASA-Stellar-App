import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <Link to='/nasaphoto' className='home-link'>See into the stars!</Link>
        </div>
    )
}

export default Home