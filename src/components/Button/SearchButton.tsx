import React from 'react';
import { classname } from '../../shared/utils';
import { SvgFind } from '../Svg/SvgFind';
import { BaseButton, BaseButtonProps } from './BaseButton';
import './SearchButton.scss';

export type SearchButtonProps = Omit<BaseButtonProps, 'children'>;

export const SearchButton: React.FC<SearchButtonProps> = ({
  className = '',
  ...rest
}) => {
  const cls = classname({
    'search-button': true,
    [className]: className.length > 0,
  });

  return (
    <BaseButton {...rest} className={cls}>
      <SvgFind className="search-button__svg" />
    </BaseButton>
  );
};
