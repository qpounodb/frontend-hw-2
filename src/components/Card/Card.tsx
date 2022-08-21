import React from 'react';
import { classname } from '../../shared/utils';
import './Card.scss';

export type CardProps = {
  image: string;
  placeholder?: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  content?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  className?: string;
};

const DEFAULT_PLACEHOLDER = '🍥';

export const Card: React.FC<CardProps> = ({
  image,
  placeholder = DEFAULT_PLACEHOLDER,
  title,
  subtitle,
  content,
  onClick,
  className,
}) => {
  const imgRef = React.useRef<HTMLImageElement | null>(null);

  React.useEffect(() => {
    if (!imgRef.current) return;
    const img = imgRef.current;
    const onLoad = () => img.classList.remove('card__avatar_hidden');
    img.addEventListener('load', onLoad);
    return () => img.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className={classname('card', className)} onClick={onClick}>
      <div className="card__side">
        <div className="card__placeholder">
          {placeholder.at(0)?.toUpperCase() || DEFAULT_PLACEHOLDER}
        </div>
        <img
          ref={imgRef}
          className="card__avatar card__avatar_hidden"
          src={image}
          alt="avatar"
        />
      </div>
      <div className="card__main">
        <div className="card__item card__title">{title}</div>
        <div className="card__item card__subtitle">{subtitle}</div>
        <div className="card__item card__content">{content}</div>
      </div>
    </div>
  );
};
