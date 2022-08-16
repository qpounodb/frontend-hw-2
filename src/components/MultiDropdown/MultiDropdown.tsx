import classname from 'classnames';
import React, { useState } from 'react';

/** Вариант для выбора в фильтре */
export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
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

const isSelected = (options: Option[], { key }: Option) =>
  options.some((o) => o.key === key);

export const MultiDropdownItem: React.FC<{
  selected: boolean;
  option: Option;
  onChange: (option: Option) => void;
}> = ({ selected, option, onChange }) => {
  const cls = classname('multi-dropdown__item', {
    'multi-dropdown__item-selected': selected,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onChange(option);
  };

  return (
    <div className={cls} onClick={handleClick}>
      {option.value}
    </div>
  );
};

export const MultiDropdownList: React.FC<{
  options: Option[];
  initSelected: Option[];
  onChange: (value: Option[]) => void;
}> = ({ options, initSelected, onChange }) => {
  const [selected, setSelected] = useState<Option[]>(initSelected);

  React.useEffect(() => {
    setSelected(initSelected);
  }, [initSelected]);

  const handleChange = (option: Option) =>
    setSelected((state) => {
      const updated = isSelected(state, option)
        ? state.filter((o) => o.key !== option.key)
        : [...state, option];
      onChange(updated);
      return updated;
    });

  return (
    <div className={'multi-dropdown__list'}>
      {options.map((option) => (
        <MultiDropdownItem
          key={option.key}
          option={option}
          selected={isSelected(selected, option)}
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

  const cls = classname('multi-dropdown', {
    'multi-dropdown_disabled': disabled,
  });

  const handleDropdown = () => disabled || setHide((state) => !state);

  return (
    <div className={cls} onClick={handleDropdown}>
      <div>{pluralizeOptions(value)}</div>
      {disabled || isHidden ? null : (
        <div>
          <MultiDropdownList
            options={options}
            initSelected={value}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
};
