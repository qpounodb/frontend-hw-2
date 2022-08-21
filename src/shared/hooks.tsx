import React from 'react';
import { isNode } from './utils';

export const useHide = <T extends HTMLElement>(
  ref: React.MutableRefObject<T | null>,
  hide: () => void
) => {
  React.useEffect(() => {
    const escHandler = (e: KeyboardEvent) => e.key === 'Escape' && hide();

    const handleClickOutside = (e: Event) => {
      if (!isNode(e.target)) return;
      if (ref?.current?.contains(e.target)) return;
      hide();
    };

    document.addEventListener('keydown', escHandler);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', escHandler);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, hide]);
};
