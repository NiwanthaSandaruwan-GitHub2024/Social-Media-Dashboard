import React from "react";
import '../styles/header.css'


function Header({ children }) {
    return (
        <header className="header">
            <div class="topnav" id="myTopnav">
                <div className="navoptions">
                    <a href="">Social Media DashBoard</a>
                </div>
            </div>
        </header>
    )
}
export default Header