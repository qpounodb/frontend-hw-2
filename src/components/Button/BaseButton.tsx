import React from 'react';
import { classname } from '../../shared/utils';
import './BaseButton.scss';

export enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
}

type ButtonColorProps = React.PropsWithChildren<{ color?: ButtonColor }>;
type ButtonHTMLProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type BaseButtonProps = ButtonColorProps & ButtonHTMLProps;

export const BaseButton: React.FC<BaseButtonProps> = ({
  color = ButtonColor.primary,
  className = '',
  children,
  ...rest
}) => {
  const cls = classname({
    button: true,
    [`button_color-${color}`]: true,
    button_disabled: rest.disabled,
    [className]: className.length > 0,
  });

  return (
    <button {...rest} className={cls}>
      {children}
    </button>
  );
};
