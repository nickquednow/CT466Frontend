import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext'; // Import useAuth hook
import Dashboard from './StudentDashboard'; // Import the Dashboard component

const Home = () => {
    const { user } = useAuth();
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        // Fetch dashboard data based on user
        const fetchData = async () => {
            const token = localStorage.getItem('authToken');
            const response = await fetch('/api/dashboard', {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setDashboardData(data);
            }
        };

        fetchData();
    }, [user]); // Dependency on user to re-fetch if user changes

    if (!dashboardData) return <div>Loading...</div>;

    return <Dashboard data={dashboardData} />;
};

export default Home;
