import React from 'react';
import { Compass, BookOpen, BarChart3, Building2, Trophy } from 'lucide-react';

const Dashboard = () => {
  const collegeStats = [
    { name: 'Harvard University', chance: 'Reach', status: 'Researching' },
    { name: 'Stanford University', chance: 'Reach', status: 'Interested' },
    { name: 'MIT', chance: 'Target', status: 'Applying' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Welcome Card */}
        <div className="col-span-full bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-800">Welcome back, Sarah!</h1>
          <p className="mt-2 text-gray-600">Track your college journey and explore opportunities.</p>
        </div>

        {/* College List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">My College List</h2>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">COLLEGE</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">CHANCE</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {collegeStats.map((college, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm text-gray-800">{college.name}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        {college.chance}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        {college.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-4">
            {[
              { icon: Building2, label: 'Search Colleges' },
              { icon: Compass, label: 'Explore Careers' },
              { icon: BookOpen, label: 'Course Planner' },
              { icon: BarChart3, label: 'View Progress' },
              { icon: Trophy, label: 'Track Activities' },
            ].map((action, index) => (
              <button
                key={index}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                <action.icon className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-700">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Progress Overview */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">College Application Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Colleges Added', value: '12', color: 'bg-blue-100 text-blue-800' },
              { label: 'Applications Started', value: '5', color: 'bg-yellow-100 text-yellow-800' },
              { label: 'Applications Submitted', value: '3', color: 'bg-green-100 text-green-800' },
              { label: 'Decisions Received', value: '1', color: 'bg-purple-100 text-purple-800' },
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-50">
                <div className="text-2xl font-bold mb-1">
                  <span className={`${stat.color} px-2 py-1 rounded`}>{stat.value}</span>
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;