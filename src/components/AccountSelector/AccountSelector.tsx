import React from 'react';
import classNames from 'classnames';
import styles from './AccountSelector.module.scss';

interface AccountSelectorProps {
  currentId: string;
  onSelectId: (id: string) => void;
}

export const AccountSelector: React.FC<AccountSelectorProps> = ({ currentId, onSelectId }) => {
  const { selectorContainer, btn, active } = styles;

  return (
    <div className={selectorContainer}>
      <p>
        Active Account: <span>{currentId}</span>
      </p>

      <button
        onClick={() => onSelectId('poke_gems')}
        className={classNames(btn, currentId === 'poke_gems' ? active : '')}
      >
        Ammi (poke_gems)
      </button>

      <button
        onClick={() => onSelectId('poke_relics')}
        className={classNames(btn, currentId === 'poke_relics' ? active : '')}
      >
        Soukayna (poke_relics)
      </button>
    </div>
  );
};
