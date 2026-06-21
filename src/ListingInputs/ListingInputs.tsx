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
  const { inputsContainer, fieldGroup, labelHeader } = styles;

  return (
    <div className={inputsContainer}>
      <div className={fieldGroup}>
        <div className={labelHeader}>
          <label>Enter title (up to 80 characters):</label>
          <span>
            Total characters: <strong>{title?.length || 0}</strong>
          </span>
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Pokemon TCG: Gothitelle..."
          maxLength={80}
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
