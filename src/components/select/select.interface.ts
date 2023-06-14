import { SelectProps as SelectPropsMui } from '@mui/material';

export interface MenuItem {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectPropsMui, 'onChange'> {
  onChange?: (value: MenuItem['value']) => void;
  menuItems: MenuItem[];
}
