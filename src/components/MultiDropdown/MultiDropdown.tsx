import React, { useState } from 'react';
import { useHide } from '../../shared/hooks';
import { classname } from '../../shared/utils';
import { Input } from '../Input/Input';
import './MultiDropdown.scss';
import { MultiDropdownList } from './MultiDropdownList';
import { MultiDropdownProps } from './types';

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  value,
  disabled,
  pluralizeOptions,
  placeholder = '',
  ...rest
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isHidden, setHide] = useState<boolean>(true);
  const title = React.useMemo(
    () => pluralizeOptions(value),
    [value, pluralizeOptions]
  );

  useHide(ref, () => setHide(true));

  const cls = classname({
    'multi-dropdown': true,
    'multi-dropdown_disabled': disabled,
  });

  const handleDropdown = () => disabled || setHide((state) => !state);

  return (
    <div className={cls} ref={ref}>
      <div className="multi-dropdown__test-input" onClick={handleDropdown}>
        {title}
      </div>
      <Input
        className="multi-dropdown__input"
        value={title}
        placeholder={placeholder}
        onClick={handleDropdown}
        onChange={() => {}}
        readOnly
        disabled={disabled}
      />
      {disabled || isHidden ? null : (
        <MultiDropdownList {...rest} selected={value} />
      )}
    </div>
  );
};
