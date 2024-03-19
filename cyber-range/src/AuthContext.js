import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

/*export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // You can store more user details

    const login = (userData, token) => {
        localStorage.setItem('authToken', token); // Save token
        setUser(userData); // Update user state
    };

    const logout = () => {
        localStorage.removeItem('authToken'); // Clear token
        setUser(null); // Clear user state
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};*/
// AuthContext.js

//mock function
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (username, password) => {
        // Simple check for "test" username and password for demonstration
        if (username === 'test' && password === 'test') {
            setIsAuthenticated(true);
            console.log('Test login successful');
        } else {
            setIsAuthenticated(false);
            console.error('Test login failed');
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthContext;