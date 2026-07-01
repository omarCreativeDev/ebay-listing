import { useAccount } from 'context/AccountContext/AccountContext';
import Styles from './Logo.module.scss';
import { PokeGemsLogo } from './PokeGemsLogo';
import { PokeRelicsLogo } from './PokeRelicsLogo';
import { TcgGemsLogo } from './TcgGemsLogo';

export const Logo = () => {
  const { wrapper } = Styles;
  const { ebayId } = useAccount();

  return (
    <div className={wrapper}>
      {ebayId === 'poke_gems' && <PokeGemsLogo />}
      {ebayId === 'poke_relics' && <PokeRelicsLogo />}
      {ebayId === 'tcg_gems' && <TcgGemsLogo />}
    </div>
  );
};
