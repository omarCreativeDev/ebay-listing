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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!aiLoading && title.trim()) {
      onGenerateAiDescription();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={container}>
      <div className={fieldGroup}>
        <div className={labelHeader}>
          <label htmlFor="titleInput">
            <strong>Enter title</strong>
          </label>
          <span>
            <strong>Characters left</strong>: {title?.length ? 80 - title?.length : 80}
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
          {aiLoading ? 'Thinking...' : '✨ Generate'}
        </Button>
      </div>
    </form>
  );
};
