import React, { useContext }  from 'react';
import { AuthContext } from '../context/AuthContext';

const Article = (props) => {
    const isLoggedIn = useContext(AuthContext);

    return (
        <>
            <h2>Article title</h2>
            <p>Description text...</p>
            {isLoggedIn ? <button>Edit</button> : null}
        </>
    );
}

export default Article;