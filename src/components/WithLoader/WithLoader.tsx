import React from 'react';
import { Loader } from '../Loader/Loader';
import './WithLoader.scss';

export type WithLoaderProps = React.PropsWithChildren<{
  loading?: boolean;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({
  loading,
  children,
}) => {
  return (
    <div className={'with-loader'}>
      {children}
      {loading && (
        <div className={'with-loader__cover'}>
          <Loader className={'with-loader__loader'} />
        </div>
      )}
    </div>
  );
};
