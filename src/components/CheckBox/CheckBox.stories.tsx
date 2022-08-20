import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CheckBox as CheckBoxComponent } from './CheckBox';

type Meta = ComponentMeta<typeof CheckBoxComponent>;
type Story = ComponentStory<typeof CheckBoxComponent>;

const meta: Meta = {
  title: 'Input/CheckBox',
  component: CheckBoxComponent,
};

export default meta;

const initChecked = true;

export const CheckBox: Story = ({ checked, onChange, ...rest }) => {
  const [isChecked, setChecked] = React.useState(Boolean(checked));

  React.useEffect(() => setChecked(Boolean(checked)), [checked]);

  const handleChange: typeof onChange = (value) => {
    setChecked(value);
    onChange(value);
  };

  return (
    <CheckBoxComponent {...rest} checked={isChecked} onChange={handleChange} />
  );
};
CheckBox.args = {
  checked: initChecked,
  disabled: false,
};
