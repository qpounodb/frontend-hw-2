import React from 'react';
import { classname } from '../../shared/utils';
import './Input.scss';

type InputHTMLProps = React.InputHTMLAttributes<HTMLInputElement>;
type InputChangeHandler = React.ChangeEventHandler<HTMLInputElement>;

export type InputProps = Omit<InputHTMLProps, 'value' | 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({
  onChange,
  className = '',
  ...rest
}) => {
  const cls = classname({
    input: true,
    input_disabled: rest.disabled,
    [className]: className.length > 0,
  });

  const handler: InputChangeHandler = (e) => onChange(e.target.value);

  return <input {...rest} className={cls} type="text" onChange={handler} />;
};
