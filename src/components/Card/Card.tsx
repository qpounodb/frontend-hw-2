import React from 'react';
import './Card.scss';

/** Пропсы, которые принимает компонент Card */
export type CardProps = {
  /** URL изображения */
  image: string;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Подзаголовок карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  content,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card__side">
        <img className="card__avatar" src={image} alt="avatar" />
      </div>
      <div className="card__main">
        <div className="card__item card__title">{title}</div>
        <div className="card__item card__subtitle">{subtitle}</div>
        <div className="card__item card__content">{content}</div>
      </div>
    </div>
  );
};
