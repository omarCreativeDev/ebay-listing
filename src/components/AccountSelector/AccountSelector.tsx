import React from 'react';
import classNames from 'classnames';
import styles from './AccountSelector.module.scss';
import { ACCOUNT_IDS } from './constants';
import { AccountSelectorProps } from './interfaces';

export const AccountSelector: React.FC<AccountSelectorProps> = ({ currentId, onSelectId }) => {
  const { selectorContainer, btn, active } = styles;

  return (
    <div className={selectorContainer}>
      <p>
        Active Account: <span>{currentId}</span>
      </p>

      {ACCOUNT_IDS.map((account) => {
        return (
          <button
            key={account.id}
            onClick={() => onSelectId(account.id)}
            className={classNames(btn, currentId === account.id ? active : '')}
          >
            {account.name} ({account.id})
          </button>
        );
      })}
    </div>
  );
};
