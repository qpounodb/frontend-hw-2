import classname from 'classnames';
import React from 'react';
import { Loader } from '../Loader/Loader';

/** Возможные раскраски кнопки */
export enum ButtonColor {
  /** Основная, акцентная кнопка */
  primary = 'primary',
  /** Второстепенная кнопка */
  secondary = 'secondary',
}

/** Пропсы, который принимает компонент Button */
export type ButtonProps = React.PropsWithChildren<{
  /**
   * Если true, то внутри кнопки вместе с children отображается компонент Loader
   * Также кнопка должна переходить в состояние disabled
   * По умолчанию - false
   */
  loading?: boolean;
  /** Цвет кнопки, по умолчанию -  ButtonColor.primary*/
  color?: ButtonColor;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  loading = false,
  color = ButtonColor.primary,
  children,
  className,
  ...args
}) => {
  args.disabled ||= loading;

  const cls = classname(
    'button',
    `button_color-${color}`,
    {
      button_disabled: args.disabled,
    },
    className
  );

  return (
    <button {...args} className={cls}>
      {children}
      {loading && <Loader loading={loading} />}
    </button>
  );
};
