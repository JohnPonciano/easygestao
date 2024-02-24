import React from 'react';
import { Sidebar } from '../components/SideBar/SideBar';
import { Topbar } from '../components/topbar/Topbar';

const Dashboard = () => {
  return (
    <main>
      <Topbar/>
      <Sidebar/>
    </main>
  );
};

export default Dashboard;
