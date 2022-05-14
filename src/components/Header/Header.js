import React from 'react';
import '../Header/header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {          

        return (
            <div className="d-flex flex-row justify-content-between ">
               <div>
                    <ul className="nav">
                        <li className="nav-item">                            
                            <Link className="nav-link active " aria-current="page" to ="/home">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about"> About </Link>
                        </li>
                        <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"> Login </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register"> Register </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Add Client </Link>
                        </li>
                    </>
                    </ul>
               </div>
            </div>
        )
    }
}

export default Header