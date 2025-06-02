import React from 'react';
import RuleBuilder from '../components/RuleBuilder';
import CampaignForm from '../components/CampaignForm';
import CampaignHistory from '../components/CampaignHistory';

export default function Dashboard() {
  return (
    <div>
      <h2>CRM Dashboard</h2>
      <CampaignForm />
      <CampaignHistory />
    </div>
  );
}