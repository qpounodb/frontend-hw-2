import classname from 'classnames';
import React from 'react';

/** Пропсы, которые принимает компонент Input */
export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  className = '',
  ...args
}) => {
  const cls = classname({
    input: true,
    input_disabled: args.disabled,
    [className]: className.length > 0,
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      {...args}
      className={cls}
      type="text"
      value={value}
      onChange={changeHandler}
    />
  );
};
