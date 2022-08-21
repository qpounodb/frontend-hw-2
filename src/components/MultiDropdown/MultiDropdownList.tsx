import React from 'react';
import { not } from '../../shared/utils';
import { MultiDropdownItem } from './MultiDropdownItem';
import { MultiDropdownListProps, Option } from './types';

const equalTo = (a: Option) => (b: Option) => a.key === b.key;

export const MultiDropdownList: React.FC<MultiDropdownListProps> = ({
  options,
  selected,
  onChange,
}) => {
  const selectedSet = React.useMemo(
    () => new Set(selected.map(({ key }) => key)),
    [selected]
  );

  const handleChange = (option: Option, isSelected: boolean) => {
    const isChanged = equalTo(option);
    onChange(
      isSelected
        ? selected.filter(not(isChanged))
        : options.filter((o) => isChanged(o) || selectedSet.has(o.key))
    );
  };

  return (
    <div className={'multi-dropdown__list'}>
      {options.map((option) => (
        <MultiDropdownItem
          key={option.key}
          option={option}
          isSelected={selectedSet.has(option.key)}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};
