import { createContext } from 'react';
import { AccountContextType } from './interfaces';

export const AccountContext = createContext<AccountContextType | undefined>(undefined);
