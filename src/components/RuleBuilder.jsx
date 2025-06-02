import React from 'react';

export default function RuleBuilder({ rules, setRules }) {
  const addRule = () => setRules([...rules, { field: 'spend', op: '>', value: 10000 }]);

  return (
    <div>
      <h4>Rule Builder</h4>
      {rules.map((r, i) => (
        <div key={i}>{r.field} {r.op} {r.value}</div>
      ))}
      <button onClick={addRule}>Add Rule</button>
    </div>
  );
}