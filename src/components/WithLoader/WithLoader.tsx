import React from 'react';
import { classname, PropsWithClassName } from '../../shared/utils';
import { Loader } from '../Loader/Loader';
import './WithLoader.scss';

export type WithLoaderProps = React.PropsWithChildren<
  PropsWithClassName<{
    loading?: boolean;
  }>
>;

export const WithLoader: React.FC<WithLoaderProps> = ({
  loading,
  children,
  className,
}) => (
  <div className={classname('with-loader', className)}>
    {children}
    {loading && (
      <div className={'with-loader__cover'}>
        <Loader className={'with-loader__loader'} />
      </div>
    )}
  </div>
);
