import { useAccount } from 'context/AccountContext/AccountContext';
import React from 'react';
import { Button } from '../Button/Button';
import { TitleInputProps } from './interfaces';
import styles from './TitleInput.module.scss';

export const TitleInput: React.FC<TitleInputProps> = ({
  title,
  setTitle,
  onGenerateAiDescription,
  aiLoading
}) => {
  const { container, fieldGroup, labelHeader, aiBtn } = styles;
  const { ebayId } = useAccount();

  return (
    <div className={container}>
      <div className={fieldGroup}>
        <div className={labelHeader}>
          <label htmlFor="titleInput">
            <strong>Enter title</strong> (up to 80 characters)
          </label>
          <span>
            <strong>Total characters</strong>: {title?.length || 0}
          </span>
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Pokemon TCG: Gothitelle..."
          maxLength={80}
          id="titleInput"
        />
      </div>

      <div className={fieldGroup}>
        <Button
          onClick={onGenerateAiDescription}
          disabled={aiLoading || !title.trim()}
          className={aiBtn}
          variant={ebayId}
        >
          {aiLoading ? 'Ai is thinking...' : '✨ Generate Description with Ai'}
        </Button>
      </div>
    </div>
  );
};
