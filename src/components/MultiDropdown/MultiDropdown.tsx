import React, { useState } from 'react';
import { classname } from '../../shared/classname';

export type Option = {
  key: string;
  value: string;
};

export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, массив может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions: (value: Option[]) => string;
};

export type MultiDropdownItemProps = {
  option: Option;
  selected: boolean;
  onChange: (option: Option) => void;
};

export const MultiDropdownItem: React.FC<MultiDropdownItemProps> = ({
  option,
  selected,
  onChange,
}) => {
  const cls = classname({
    'multi-dropdown__item': true,
    'multi-dropdown__item_selected': selected,
  });

  const handleClick = () => onChange(option);

  return (
    <div className={cls} onClick={handleClick}>
      {option.value}
    </div>
  );
};

const isSelected = (o: Option, selected: Option[]) =>
  selected.some(({ key }) => key === o.key);

export const MultiDropdownList: React.FC<
  Omit<MultiDropdownProps, 'disabled' | 'pluralizeOptions'>
> = ({ options, value, onChange }) => {
  const handleChange = (changed: Option) => {
    const updated = isSelected(changed, value)
      ? value.filter((o) => o.key !== changed.key)
      : options.filter(
          (o) => o.key === changed.key || isSelected(changed, value)
        );
    onChange(updated);
  };

  return (
    <div className={'multi-dropdown__list'}>
      {options.map((option) => (
        <MultiDropdownItem
          key={option.key}
          option={option}
          selected={isSelected(option, value)}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  disabled,
  onChange,
  pluralizeOptions,
}) => {
  const [isHidden, setHide] = useState<boolean>(true);
  const title = React.useMemo(
    () => pluralizeOptions(value),
    [value, pluralizeOptions]
  );

  const cls = classname('multi-dropdown', {
    'multi-dropdown_disabled': disabled,
  });

  const handleDropdown = () => disabled || setHide((state) => !state);

  return (
    <div className={cls}>
      <div className="multi-dropdown__title" onClick={handleDropdown}>
        {title}
      </div>
      {disabled || isHidden ? null : (
        <MultiDropdownList
          options={options}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};
