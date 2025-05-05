import React from 'react';
import UserProfile from './UserProfile';
import UserStats from './UserStats';

const Dashboard = () => {
  const user = {
    name: 'Geetha',
    age: 28
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <UserProfile user={user} />
      <UserStats />
    </div>
  );
};

export default Dashboard;