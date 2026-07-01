import { Account } from 'components/AccountSelector/interfaces';
import React from 'react';
import { useAccount } from 'context/AccountContext/AccountContext';
import { Button } from '../Button/Button';
import styles from './AccountSelector.module.scss';
import { ACCOUNT_IDS } from './constants';

export const AccountSelector: React.FC = () => {
  const { container, btn } = styles;
  const { ebayId, setEbayId } = useAccount();

  return (
    <div className={container}>
      <p>
        Active Account: <span>{ebayId}</span>
      </p>

      {ACCOUNT_IDS.map((account: Account) => {
        return (
          <Button
            key={account.id}
            onClick={() => setEbayId(account.id)}
            variant={account.id}
            className={btn}
          >
            {account.name} ({account.id})
          </Button>
        );
      })}
    </div>
  );
};
