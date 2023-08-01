import React from "react";
import "../styles/AppStyles.css";

// Components 
import AppNav from "./AppNav";

const FrontPage = () => {
    return (
        <div className="dashboard">
            <AppNav />
            <div className="dashboard-container">
                <h2>Hello World</h2>
            </div>
        </div>
    );
}
 
export default FrontPage;
