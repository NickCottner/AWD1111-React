import React from 'react'
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{location.state}</h5>
                //Possibly Use A Switch Statement
                <p className="card-text">Learn from the industry experts in live one to one session</p>
            </div>
        </div>
    )
}

export default Dashboard
