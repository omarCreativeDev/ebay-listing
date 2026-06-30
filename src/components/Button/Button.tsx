import styles from './Button.module.scss';
import { ButtonProps } from './interfaces';
import classNames from 'classnames';

export const Button = ({ className, children, variant, ...props }: ButtonProps) => {
  const { btn } = styles;

  return (
    <button {...props} className={classNames(btn, styles[variant], className)}>
      {children}
    </button>
  );
};
