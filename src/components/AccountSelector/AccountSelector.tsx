import React from 'react';
import { Button } from '../Button/Button';
import styles from './AccountSelector.module.scss';
import { ACCOUNT_IDS } from './constants';
import { AccountSelectorProps } from './interfaces';

export const AccountSelector: React.FC<AccountSelectorProps> = ({ currentId, onSelectId }) => {
  const { container, btn } = styles;

  return (
    <div className={container}>
      <p>
        Active Account: <span>{currentId}</span>
      </p>

      {ACCOUNT_IDS.map((account) => {
        return (
          <Button
            key={account.id}
            onClick={() => onSelectId(account.id)}
            variant={currentId === account.id ? 'primary' : 'tertiary'}
            className={btn}
          >
            {account.name} ({account.id})
          </Button>
        );
      })}
    </div>
  );
};
