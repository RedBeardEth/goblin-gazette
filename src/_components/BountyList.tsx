import React from 'react';

// Define the interface for the bounty
interface Bounty {
    bounty_id: number, // Unique id
    beast: string, // beast id
    bounty: number, // Amount of Lords tokens for bounty
    prefix: string, // 0 if no prefix
    suffix: string, // 0 if no suffix
    expiration: number, // Timestamp
    active: boolean, // Is the bounty active
}

// Define the interface for the BountyList props
interface BountyListProps {
  bounties: Bounty[];
}

const BountyList: React.FC<BountyListProps> = ({ bounties }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Bounty List</h2>
      {bounties.length === 0 ? (
        <p>No bounties submitted yet.</p>
      ) : (
        <ul>
          {bounties.map((bounty, index) => (
            <li key={index} className="mb-2">
              <strong>Beast:</strong> {bounty.beast}, <strong>Bounty Reward:</strong> ${bounty.bounty} Lords
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BountyList;