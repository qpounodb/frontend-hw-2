import React from 'react';

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
    <div onClick={onClick}>
      <div>
        <img src={image} alt="image" />
      </div>
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <div>{content}</div>
      </div>
    </div>
  );
};
