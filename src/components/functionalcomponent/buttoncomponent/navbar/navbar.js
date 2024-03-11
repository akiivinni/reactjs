import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'; // Import the external CSS file

const Navigation = () => {
    return (
        <>
            <title>Bootstrap Example</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Logo
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/product" className="nav-link">
                              ProductDetails
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div style={{ paddingTop: '56px' }}> 
              
            </div>
        </>
    );
}

export default Navigation;
