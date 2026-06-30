import { ILogoProps } from './interfaces';
import Styles from './Logo.module.scss';
import { PokeGemsLogo } from './PokeGemsLogo';
import { PokeRelicsLogo } from './PokeRelicsLogo';
import { TcgGemsLogo } from './TcgGemsLogo';

export const Logo = ({ id }: ILogoProps) => {
  const { wrapper } = Styles;

  return (
    <div className={wrapper}>
      {id === 'poke_gems' && <PokeGemsLogo />}
      {id === 'poke_relics' && <PokeRelicsLogo />}
      {id === 'tcg_gems' && <TcgGemsLogo />}
    </div>
  );
};
