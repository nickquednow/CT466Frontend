// App.js
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './Assets/LoginForm';
import Home from './Assets/Home';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          {/* Setup other routes */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;