import { useCallback } from 'react';
import {
  FormControl,
  InputLabel,
  Select as SelectMui,
  MenuItem,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import type { SelectProps } from './select.interface';
import styles from './select.module.scss';

export const Select = (props: SelectProps) => {
  const {
    labelId = 'select-label',
    onChange,
    label,
    value,
    menuItems,
    ...rest
  } = props;

  const handleChange = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      if (onChange) {
        onChange(event.target.value as string);
      }
    },
    [onChange],
  );

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <SelectMui
        value={value}
        className={styles.selectMui}
        labelId={labelId}
        label={label}
        variant="standard"
        {...rest}
        onChange={handleChange}
      >
        {menuItems.map((el, index) => {
          const { value, label } = el;

          return (
            <MenuItem
              className={styles.MenuItems}
              key={`${value} - ${index}`}
              value={value}
            >
              {label}
            </MenuItem>
          );
        })}
      </SelectMui>
    </FormControl>
  );
};
