import React from 'react';
import RuleBuilder from '../components/RuleBuilder';
import CampaignForm from '../components/CampaignForm';
import CampaignHistory from '../components/CampaignHistory';

export default function Dashboard() {
  return (
    <div>
      <h2 color='white'>CRM Dashboard</h2>
      <div className="container dashboard">
      <div className="dashboard-header">
    <h2>Dashboard</h2>
    <button>Logout</button>
  </div>
  <div className="dashboard-card">
    <h3>Campaign Overview</h3>
    <p>Status: Active</p>
     <CampaignForm />
      <CampaignHistory />
  </div>
</div>
    </div>
  );
}