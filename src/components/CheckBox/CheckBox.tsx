import React from 'react';
import { classname } from '../../shared/utils';
import './CheckBox.scss';

type InputHTMLProps = React.InputHTMLAttributes<HTMLInputElement>;
type InputChangeHandler = React.ChangeEventHandler<HTMLInputElement>;

type CheckBoxProps = Omit<InputHTMLProps, 'onChange'> & {
  onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  className = '',
  onChange,
  ...rest
}) => {
  const cls = classname({
    checkbox: true,
    [className]: className.length > 0,
  });

  const handler: InputChangeHandler = (e) => onChange(e.currentTarget.checked);

  return <input {...rest} className={cls} type="checkbox" onChange={handler} />;
};
