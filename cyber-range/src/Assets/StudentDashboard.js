import React from 'react';

const Dashboard = ({ data }) => {
    // Example of dynamically displaying content
    // Assume data contains a 'name' property and a 'content' array for simplicity
    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome, {data.name}!</p>
            <ul>
                {data.content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {/* Additional dynamic rendering based on user data can be done here */}
        </div>
    );
};

export default Dashboard;

