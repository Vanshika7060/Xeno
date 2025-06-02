import React, { useEffect, useState } from 'react';
import axios from '../services/api';

export default function CampaignHistory() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get('/campaigns').then(res => setCampaigns(res.data));
  }, []);

  return (
    <div>
      <h3 color='peach'>Campaign History</h3>
      {campaigns.map(c => (
        <div key={c._id}>{c.name} - {c.stats?.sent || 0} sent</div>
      ))}
    </div>
  );
}