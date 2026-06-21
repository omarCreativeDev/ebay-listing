import React from 'react';
import styles from './ListingInputs.module.scss';

interface ListingInputsProps {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
}

export const ListingInputs: React.FC<ListingInputsProps> = ({
  title,
  setTitle,
  description,
  setDescription
}) => {
  const { inputsContainer, title: titleClass, fieldGroup } = styles;

  return (
    <div className={inputsContainer}>
      <p className={titleClass}>Listing Details</p>

      <div className={fieldGroup}>
        <label>Item Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Pokemon TCG: Gothitelle..."
        />
      </div>

      <div className={fieldGroup}>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter item description..."
          rows={5}
        />
      </div>
    </div>
  );
};
