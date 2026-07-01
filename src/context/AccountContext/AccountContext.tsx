import { useContext, useState, ReactNode } from 'react';
import { AccountContext } from './constants';

export function AccountProvider({ children }: { children: ReactNode }) {
  const [ebayId, setEbayId] = useState<string>('poke_gems');

  return (
    <AccountContext.Provider value={{ ebayId, setEbayId }}>{children}</AccountContext.Provider>
  );
}

export function useAccount() {
  const context = useContext(AccountContext);

  if (context === undefined) {
    throw new Error('useAccount must be used within an AccountProvider');
  }
  return context;
}
