import React from 'react';

/** Пропсы, которые принимает компонент CheckBox */
type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({ onChange, ...args }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    args.disabled || onChange(e.currentTarget.checked);
  };

  return <input type="checkbox" onChange={handleChange} {...args} />;
};
