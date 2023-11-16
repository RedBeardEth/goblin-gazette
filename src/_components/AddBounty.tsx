import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

// Define the interface for the bounty
interface Bounty {
  id: string;
  cost: number;
}

const BountyForm: React.FC = () => {
  // State to track the input values
  const [bountyData, setBountyData] = useState<Bounty>({
    id: '',
    cost: 0,
  });

  // Handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBountyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform the action to add the bounty with bountyData
    // For demonstration, you can log the data to the console
    console.log('Adding bounty:', bountyData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add Bounty</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-600">
            ID
          </label>
          <Input
            type="text"
            id="id"
            name="id"
            value={bountyData.id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cost" className="block text-sm font-medium text-gray-600">
            Cost
          </label>
          <Input
            type="number"
            id="cost"
            name="cost"
            value={bountyData.cost}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button
          type="submit"
        >
          Add Bounty
        </Button>
      </form>
    </div>
  );
};

export default BountyForm;