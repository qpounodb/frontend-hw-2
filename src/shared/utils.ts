import builder from 'classnames';

export type PropsWithClassName<P = unknown> = { className?: string } & P;

export const classname = builder;

export type Predicat<P extends any[]> = (...args: P) => boolean;

export const not =
  <P extends any[]>(func: Predicat<P>): Predicat<P> =>
  (...args: P) =>
    !func(...args);

export const isNode = (e: Event['target']): e is Node =>
  e !== null && 'nodeType' in e;
