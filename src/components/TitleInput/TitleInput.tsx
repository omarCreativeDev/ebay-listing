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
  const { container, fieldGroup, labelHeader, aiBtn, inputWrapper, clearBtn } = styles;
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
        <div className={inputWrapper}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Pokemon TCG: Gothitelle..."
            maxLength={80}
            id="titleInput"
          />

          {/* Only show the clear button if there is text in the input */}
          {title && (
            <button
              type="button"
              className={clearBtn}
              onClick={() => setTitle('')}
              aria-label="Clear title"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
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
