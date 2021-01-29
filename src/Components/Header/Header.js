import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/home'>Create Cocktail</Link>
            </nav>
        </header>
    )
}
export default Header;