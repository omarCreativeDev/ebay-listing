import React from 'react';
import styles from './TitleInput.module.scss';

interface TitleInputProps {
  title: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  onGenerateAiDescription: () => Promise<void>;
  aiLoading: boolean;
}

export const TitleInput: React.FC<TitleInputProps> = ({
  title,
  setTitle,
  onGenerateAiDescription,
  aiLoading
}) => {
  const { inputsContainer, fieldGroup, labelHeader, aiBtn } = styles;

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
        <button
          onClick={onGenerateAiDescription}
          disabled={aiLoading || !title.trim()}
          className={aiBtn}
        >
          {aiLoading ? 'Ai is thinking...' : '✨ Generate Description with Ai'}
        </button>
      </div>
    </div>
  );
};
