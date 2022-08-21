import * as React from 'react';
import { classname } from '../../shared/utils';
import './Svg.scss';

export type SvgProps = React.SVGProps<SVGSVGElement>;

export const Svg: React.FC<SvgProps> = ({ className, children, ...rest }) => {
  return (
    <svg
      className={classname('svg', className)}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </svg>
  );
};
