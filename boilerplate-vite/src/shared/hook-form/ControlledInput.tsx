import * as React from 'react';

import { Controller } from 'react-hook-form';
import { HookFormProps } from '@/shared/types/common.types';
import Input from '@/components/Input/Input';

export const ControlledInput: React.FC<HookFormProps> = ({ onEnter, ...props }: any) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      defaultValue={props.defaultValue ?? ''}
      render={({ field: { onChange, name: fieldName, value }, fieldState: { error } }) => {
        return (
          <Input
            {...props}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChange(e);
              props.onChange && props.onChange(e);
            }}
            onKeyDown={(e: any) => {
              if (e.keyCode === 13) {
                onEnter && onEnter(e);
              }
            }}
            name={fieldName}
            error={error && error.message}
            value={value ?? ''}
          />
        );
      }}
    />
  );
};
