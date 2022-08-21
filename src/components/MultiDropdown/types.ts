export type Option = {
  key: number | string;
  value: string;
};

export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, массив может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (selected: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions: (value: Option[]) => string;
  /** Отображается в дропдауне когда ничего не выбранно */
  placeholder?: string;
};

export type MultiDropdownListProps = {
  options: Option[];
  selected: Option[];
  onChange: (selected: Option[]) => void;
};

export type MultiDropdownItemProps = {
  option: Option;
  isSelected: boolean;
  onChange: (option: Option, isSelected: boolean) => void;
};
