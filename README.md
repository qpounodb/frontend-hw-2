# Начинающий React разработчик. Домашнее задание №2

В данном домашнем задании вам необходимо реализовать React-компоненты для вашего будущего проекта.

**Общие требования:**
1. Если в требованиях к компоненту указано, что он должен принимать пропс `className`, в таком случае переданные css-классы должны дополнять текущие css-классы, но не заменять их. 
1. При реализации className необходимо воспользоваться библиотекой [classnames](https://www.npmjs.com/package/classnames)
1. Именование css-классов должно осуществляться согласно [Методологии БЭМ](https://ru.bem.info/methodology/quick-start/)
1. Компоненты должны быть реактивными, то есть реагировать на изменение любых пропсов
1. Контролы должны быть управляемым (то есть не хранить состояние внутри, а лишь сообщать об изменениях наверх. А также соответствовать переданным пропсам со значением, даже если они не изменяются после действий)
1. Компоненты, которые принимают в качестве пропсов `React.InputHTMLAttributes<HTMLElement>` должны уметь их пробрасывать в нативные элементы
1. Из существующих файлов обязательно должны экспортироваться одноименные компоненты через обычный export, не default.

## 1. Loader
Реализуйте компонент Лоадер

**Макеты лоадера:**
[GitHub](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=81%3A606),
[E-commerce](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=90%3A839),
[Food](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=100%3A1968),
[Crypto](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=94%3A1317)

**Требования:**
```typescript
/** Возможные значения размера лоадера */
enum LoaderSize {
    s = 's',
    m = 'm',
    l = 'l'
}

/** Пропсы, которые принимает компонент Loader */
type LoaderProps = {
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
```

**Примеры использования:**
```typescript
<Loader />  // стандартный лоадер

<Loader size={LoaderSize.l} />  // лоадер размера L

<Loader loading={isLoading} />  // лоадер, который отображается только при isLoading=false
```

## 2. WithLoader
Реализуйте компонент WithLoader.

**Требования:**
1. Всегда отображает вложенные элементы (children)
1. При передаче loading=true поверх контента отображает Loader
1. Должен переиспользовать компонент Loader

```typescript
/** Пропсы, которые принимает компонент WithLoader */
export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;
```

**Примеры использования:**
```typescript
<WithLoader loading={isLoading}>
  <div>Семантическая верстка наше все!</div>
</WithLoader>
```

## 3. Button
Реализуйте компонент Кнопка.

**Макеты кнопки:**
[GitHub](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=80%3A548),
[E-commerce](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=90%3A793),
[Food](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=100%3A1888),
[Crypto](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=94%3A1318)

**Требования:**
1. Кнопка использует html-тег button и принимает все его нативные html-атрибуты
2. Кнопка принимает пропсы ButtonProps и удовлетворяет их требованиям, описанным ниже
3. Текст кнопки/дочерний элемент передается в качестве children
4. Именование css-классов:
    * Базовый класс кнопки: `.button`
    * Класс-модификатор заблокированной кнопки:  `.button_disabled`
    * Класс-модификатор, отвечающий за раскраску кнопки: `.button_color-primary`, `.button_color-secondary`

```typescript
/** Возможные раскраски кнопки */
enum ButtonColor {
    /** Основная, акцентная кнопка */
    primary = 'primary',
    /** Второстепенная кнопка */
    secondary = 'secondary'
}
 
 /** Пропсы, который принимает компонент Button */
export type ButtonProps = React.PropsWithChildren<{
    /**
     * Если true, то внутри кнопки вместе с children отображается компонент Loader
     * Также кнопка должна переходить в состояние disabled
     * По умолчанию - false
     */
    loading?: boolean;
    /** Цвет кнопки, по умолчанию -  ButtonColor.primary*/
    color?: ButtonColor;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>;
```

**Примеры использования:**
```typescript
// Кнопка с текстом "Отправить", логирующая в консоль "Письмо отправлено" при клике 
<Button onClick={() => console.log('Письмо отправлено')}>
  Отправить
</Button>

// Второстепенная кнопка, отображающая компонент Loader при загрузке каких-то данных
<Button
  color={ButtonColor.secondary}
  loading={isLoading}
>
  Отправить
</Button>

// Кнопка с элементом в качестве содержимого
<Button>
  <span>Модная кнопка</span>
</Button>

// Заблокированная кнопка с дополнительным классом
<Button className="some-outer-class" disabled>
  Отправить
</Button>

// Кнопка с пропсом нативной кнопки
<Button onMouseOver={() => console.log('Убери от меня курсор!')}>
  Отправить
</Button>
```

## 4. Card
Реализуйте компонент Карточка (Элемент списка).

**Макеты карточки:**
[GitHub](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=1%3A63),
[E-commerce](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=90%3A825),
[Food](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=100%3A1859),
[Crypto](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=92%3A1195)

**Требования:**
1. Для изображения используется html-тег img

```typescript
/** Пропсы, которые принимает компонент Card */
type CardProps = {
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
```

**Примеры использования:**
```typescript
// Простая карточка 
<Card
    image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
    title="Мандарин"
    subtitle="Марокко"
    onClick={() => console.log('Мандарин куплен!')}
/>

// Карточка с доп.контентом и подзаголовком-ссылкой
<Card
    image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
    title="Мандарин"
    subtitle={<a href="/morocco">Марокко</a>}
    content={<span><b>299р</b><i>5 отзывов</i><span>}
/>
```

## 5. Input
Реализуйте компонент Поле ввода.

**Макеты инпута:**
[GitHub](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=1%3A33),
[E-commerce](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=90%3A792),
[Food](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=100%3A1877),
[Crypto](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=92%3A1281)

**Требования:**
1. Необходимо использовать html-тег input

```typescript
/** Пропсы, которые принимает компонент Input */
export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};
```

**Примеры использования:**
```typescript
// Простое поле 
<Input
    value="Кто такой биткоин?"
    onChange={(value: string) => console.log(value)}
/>

// Заблокированное поле с плейсхолдером
<Input
    value=""
    onChange={(value: string) => console.log(value)}
    placeholder="Начните набирать свой вопрос"
    disabled
/>
```
## 6. MultiDropdown
Реализуйте компонент Выпадающий список с множественным выбором (Фильтр).

**Макеты мультидропдауна:**
[GitHub](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=77%3A372),
[E-commerce](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=91%3A954),
[Food](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=107%3A404),
[Crypto](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=94%3A1319),

**Требования:**

1. Не должен использовать html-элемент select

```typescript
/** Вариант для выбора в фильтре */
type Option = {
    /** Ключ варианта, используется для отправки на бек/использования в коде */
    key: string;
    /** Значение варианта, отображается пользователю */
    value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
type MultiDropdownProps = {
    /** Массив возможных вариантов для выбора */
    options: Option[];
    /** Текущие выбранные значения поля, массив может быть пустым */
    value: Option[];
    /** Callback, вызываемый при выборе варианта */
    onChange: (value: Option[]) => void;
    /** Заблокирован ли дропдаун */
    disabled?: boolean;
    /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
    pluralizeOptions: (value: Option[]) => string;
}
```

**Примеры использования:**
```typescript
// Простой фильтр 
<MultiDropdown
    options={[
        { key: 'msk', value: 'Москва' },
        { key: 'spb', value: 'Санкт-Петербург' },
        { key: 'ekb', value: 'Екатеринбург' }
    ]}
    value={[{ key: 'msk', value: 'Москва' }]}
    onChange={(selected: Option[]) => console.log('Выбрано:', JSON.stringify(selected))}
    pluralizeOptions={() => ''}
/>

// Заблокированный фильтр
<MultiDropdown
    disabled
    options={someOptions}
    value={currentValue}
    onChange={onChange}
    pluralizeOptions={(values: Option[]) => values.length === 0 ? 'Выберите город' : `Выбрано: ${values.length}`}
/>

// Фильтр, отображающий количество выбранных вариантов
<MultiDropdown
    options={someOptions}
    value={currentValue}
    onChange={onChange}
    pluralizeOptions={(values: Option[]) => `Выбрано: ${values.length}`}
/>
```

## 7. CheckBox
Реализуйте компонент Чекбокс.

**Макеты чекбокса:**
[GitHub](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=81%3A633),
[E-commerce](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=90%3A877),
[Food](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=100%3A1971),
[Crypto](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=92%3A1299)

**Требования:**
1. Необходимо использовать html-тег input

```typescript
/** Пропсы, которые принимает компонент CheckBox */
type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
    /** Вызывается при клике на чекбокс */
    onChange: (value: boolean) => void;
};
```

**Примеры использования:**
```typescript
// Простой чекбокс 
<CheckBox
  checked={checked}
  onChange={setChecked}
/>

// Заблокированный чекбокс 
<CheckBox
  disabled
  checked={checked}
  onChange={setChecked}
/>
```
