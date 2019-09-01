import React from 'react';
import { Link } from 'react-router-dom'

const Header = ({ title }) => {
    return(
        <div className="blueHeader">
            <h2>{title}</h2>
            <Link className="backButton" to="/dashboard" >leftarrow</Link>
        </div>
    )
}

export default Header