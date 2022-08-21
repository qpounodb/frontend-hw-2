import React from 'react';
import { classname } from '../../shared/utils';
import { Loader, LoaderSize } from '../Loader/Loader';
import { BaseButton, BaseButtonProps } from './BaseButton';
import './Button.scss';

export type ButtonProps = { loading?: boolean } & BaseButtonProps;

export const Button: React.FC<ButtonProps> = ({
  className = '',
  loading = false,
  children,
  ...rest
}) => {
  const disabled = rest.disabled || loading;

  const cls = classname({
    button_loading: loading,
    [className]: className.length > 0,
  });

  return (
    <BaseButton {...rest} disabled={disabled} className={cls}>
      {loading && (
        <div>
          <Loader size={LoaderSize.s} className={'button__loader'} />
        </div>
      )}
      <div>{children}</div>
    </BaseButton>
  );
};

export { ButtonColor } from './BaseButton';
