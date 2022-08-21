import React from 'react';
import { classname } from '../../shared/utils';
import { MultiDropdownItemProps } from './types';

export const MultiDropdownItem: React.FC<MultiDropdownItemProps> = ({
  option,
  isSelected,
  onChange,
}) => {
  const cls = classname({
    'multi-dropdown__item': true,
    'multi-dropdown__item_selected': isSelected,
  });

  const handleClick = () => onChange(option, isSelected);

  return (
    <div className={cls} onClick={handleClick}>
      {option.value}
    </div>
  );
};
