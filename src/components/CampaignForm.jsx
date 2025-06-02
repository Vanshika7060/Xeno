import React, { useState } from 'react';
import axios from '../services/api';
import RuleBuilder from './RuleBuilder';

export default function CampaignForm() {
  const [rules, setRules] = useState([]);

  const handleSubmit = async () => {
    // const res = await axios.post('/campaigns', { rules });
    // console.log(res.data);
  };

  return (
    <div >
      <h3 color='peach'>Create Campaign</h3>
      <RuleBuilder rules={rules} setRules={setRules} />
      <button onClick={handleSubmit}>Save Campaign</button>
    </div>
  );
}