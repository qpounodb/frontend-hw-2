import classname from 'classnames';
import React from 'react';
import './Loader.scss';

/** Возможные значения размера лоадера */
export enum LoaderSize {
  s = 's',
  m = 'm',
  l = 'l',
}

/** Пропсы, которые принимает компонент Loader */
export type LoaderProps = {
  /**
   * Идет ли загрузка.
   * По умолчанию - true, для удобства использования
   * Если false, то лоадер не должен отображаться
   */
  loading?: boolean;
  /**
   * Размер лоадера. При передаче данного пропса, должен добавляться css-класс loader_size-{size}
   * По умолчанию: размер - LoaderSize.m, css-класс - loader_size-m
   */
  size?: LoaderSize;
  /**
   * Дополнительные CSS-классы.
   */
  className?: string;
};

export const Loader: React.FC<LoaderProps> = ({
  loading = true,
  size = LoaderSize.m,
  className,
}) => {
  if (!loading) return null;
  const cls = classname('loader', `loader_size-${size}`, className);
  return <div className={cls} data-testid="loader"></div>;
};
