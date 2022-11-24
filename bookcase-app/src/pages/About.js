import React, { useState } from 'react';
import ".About.css";
const About = (props) => {
    return (
        <div className="header">
            <h1>About</h1>
            <div className="breadcrumb">
                <Link to="/"> Home </Link>
            </div>
            <div className="page">
                <h2> Welcome to the Bookcase Application</h2>
                <p>The following application was created by Marie Claire Tuyisenge. This bookcase app displays a list of books that a user can save to a local bookcase<br> Click on the "Add+"button to add a book to your bookcase. Use the search bar to find the latest books by name, author or description</br>
                </p>
            </div>
        </div>
    )
}
export default Aboutuspage;
