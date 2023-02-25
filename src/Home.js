import React from 'react';
import auth from "./firebase"
const Home = () => {
    return (
        <>
            <h1>home</h1>
            <button onClick={() => auth.signOut()}>Log Out</button>
        </>
    );
}

export default Home;