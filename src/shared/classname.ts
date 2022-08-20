import builder from 'classnames';

export type PropsWithClassName<P = unknown> = { className?: string } & P;

export const classname = builder;
