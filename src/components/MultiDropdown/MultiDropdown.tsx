import classname from 'classnames';
import React, { useState } from 'react';

export type Option = {
  key: string;
  value: string;
};

type OptionExtention = Option & { selected: boolean };

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
  option: OptionExtention;
  onChange: (option: OptionExtention) => void;
};

export const MultiDropdownItem: React.FC<MultiDropdownItemProps> = ({
  option,
  onChange,
}) => {
  const cls = classname('multi-dropdown__item', {
    'multi-dropdown__item_selected': option.selected,
  });

  const handleClick = () => onChange(option);

  return (
    <div className={cls} onClick={handleClick}>
      {option.value}
    </div>
  );
};

const useSelect = (props: MultiDropdownProps) => {
  const [title, setTitle] = useState<string>('');
  const [options, setOptions] = useState<OptionExtention[]>([]);

  const isSelected = (o: Option, selected: Option[]): boolean =>
    selected.some(({ key }) => o.key === key);

  const updateOptions = ({ options, value, ...props }: MultiDropdownProps) => {
    setTitle(props.pluralizeOptions(value));
    setOptions(options.map((o) => ({ ...o, selected: isSelected(o, value) })));
  };

  React.useEffect(() => {
    updateOptions(props);
  }, [props.value]);

  return { title, options, updateOptions };
};

export const MultiDropdown: React.FC<MultiDropdownProps> = (props) => {
  const [isHidden, setHide] = useState<boolean>(true);
  const { title, options, updateOptions } = useSelect(props);

  const cls = classname('multi-dropdown', {
    'multi-dropdown_disabled': props.disabled,
  });

  const handleDropdown = () => props.disabled || setHide((state) => !state);

  const handleChange = (changed: OptionExtention) => {
    const updated = options.map((o) =>
      o.key !== changed.key ? o : { ...o, selected: !o.selected }
    );
    const value = updated
      .filter(({ selected }) => selected)
      .map(({ key, value }: OptionExtention): Option => ({ key, value }));
    updateOptions({ ...props, value });
    props.onChange(value);
  };

  return (
    <div className={cls}>
      <div className="multi-dropdown__title" onClick={handleDropdown}>
        {title}
      </div>
      {props.disabled || isHidden ? null : (
        <div className={'multi-dropdown__list'}>
          {options.map((option) => (
            <MultiDropdownItem
              key={option.key}
              option={option}
              onChange={handleChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};
