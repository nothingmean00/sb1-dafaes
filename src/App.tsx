import React from 'react';
import { GraduationCap, Compass, BookOpen, BarChart3, User } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;